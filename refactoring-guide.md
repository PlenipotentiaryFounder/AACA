# Refactoring Guide: Standardizing Guide Pages

## Refactoring Checklist

- [x] `app/guide/faq`
- [x] `app/guide/pro-tips`
- [x] `app/guide/professional-pilot`
- [x] `app/guide/mental-resilience` (and subdirectories like `managing-stress`, `avoiding-burnout`, etc., if they have their own `page.tsx`)
- [x] `app/guide/checkrides` (and subdirectories like `private`, `instrument`, etc., if they have their own `page.tsx`)
- [x] `app/guide/knowledge-tests`
- [ ] `app/guide/flight-training`

---

## Goal

To standardize the structure of all pages within the `app/guide/...` directory to follow a consistent Server Component / Client Component pattern. This promotes maintainability, performance, and enables easier integration of server-side features like user progress tracking.

## Target Structure

Each guide section should consist of two main files:

1.  **`app/guide/{section-name}/page.tsx` (Server Component)**
    *   **Responsibilities:**
        *   Fetch any necessary server-side data (e.g., user progress, dynamic content - *currently not implemented but planned*).
        *   Define static page configuration data (e.g., tab definitions, navigation links).
        *   Define page metadata (using Next.js `metadata` export).
        *   Import the corresponding Client Component (`...-content.tsx`).
        *   Render the Client Component, passing all required data (fetched and static) as props.
    *   **Characteristics:**
        *   **NO** `"use client";` directive.
        *   Can be an `async function` if data fetching is needed.
        *   Contains minimal-to-no direct UI rendering logic besides rendering the Client Component.
        *   Does **NOT** use client-side hooks like `useState` or `useEffect`.

2.  **`components/guide/{section-name}-content.tsx` (Client Component)**
    *   **Responsibilities:**
        *   Render the actual UI for the guide section (tabs, cards, text, images, etc.).
        *   Handle all client-side interactivity (e.g., tab switching, button clicks).
        *   Manage client-side state using hooks like `useState`.
        *   Receive all necessary data (static config, fetched data like user progress) via props from the Server Component.
    *   **Characteristics:**
        *   **MUST** have `"use client";` at the top.
        *   Contains the bulk of the JSX/TSX for the page's visual presentation.
        *   Uses client-side hooks (`useState`, `useEffect`, `usePathname`, etc.).
        *   Defines prop types (e.g., `interface {SectionName}ContentProps`) to receive data from the Server Component.

## Refactoring Steps (Example: Converting `app/guide/learning/page.tsx`)

Follow these steps to refactor a page that currently combines server and client logic into a single Client Component (like the current `learning/page.tsx`):

1.  **Create Client Component File:**
    *   Create a new file: `components/guide/{section-name}-content.tsx`.

2.  **Move Client Logic & UI:**
    *   Copy the entire content of the *existing* `app/guide/{section-name}/page.tsx` into the *new* `components/guide/{section-name}-content.tsx`.
    *   Ensure the `"use client";` directive is at the top of `{section-name}-content.tsx`.
    *   Rename the exported function inside `{section-name}-content.tsx` (e.g., from `{SectionName}Page` to `{SectionName}Content`).
    *   **Important UI Note:** Carefully review the original JSX structure. Ensure the moved JSX within the new client component accurately reflects the intended layout (e.g., sidebars, grids, internal tabs). While separating logic, the goal is generally to *preserve* the original UI unless a simplification is explicitly desired.

3.  **Define Props for Client Component:**
    *   In `{section-name}-content.tsx`, define an interface for the props it will receive from the Server Component (e.g., `{SectionName}ContentProps`). This should include types for all data needed by the UI (e.g., `tabs`, `faqs`, navigation links, etc.).
    *   Update the function signature to accept these props: `export default function {SectionName}Content({ prop1, prop2, ... }: {SectionName}ContentProps) { ... }`.
    *   Remove the local definitions of data (e.g., `tabs`, `faqs`) from within the client component function, as these will now come from props.

4.  **Refactor Server Component File:**
    *   Open the *original* `app/guide/{section-name}/page.tsx`.
    *   **Remove `"use client";`** (if present).
    *   Delete all the UI rendering logic (the `return (...)` block) and client-side state/hooks (`useState`, `useEffect`).
    *   Delete imports related purely to UI components or hooks used only within the removed client logic.
    *   Define the static data (or fetch dynamic data if needed) that the client component requires.
    *   (Optional but recommended) Add `export const metadata: Metadata = { ... };`.
    *   Import the *new* Client Component: `import {SectionName}Content from '@/components/guide/{section-name}-content';`.
    *   In the `return` statement, render the Client Component, passing the defined/fetched data as props.

5.  **Test:** Run the development server and navigate to the page to ensure the UI looks correct and all interactivity functions as expected.

## Example: `welcome` Section (Target Structure)

**`app/guide/welcome/page.tsx` (Server Component Snippet)**
```tsx
import type { Metadata } from "next";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import WelcomeContent from '@/components/guide/welcome-content';

export const metadata: Metadata = { /* ... */ };

type PremiumTab = { /* ... */ };
interface PageLink { /* ... */ };

export default function WelcomePage() {
  const tabs: PremiumTab[] = [ /* ... define tabs data ... */ ];
  const prevPage = null;
  const nextPage: PageLink = { /* ... */ };
  const nextTopicSegue = "..."

  return (
      <WelcomeContent
          tabs={tabs}
          prevPage={prevPage}
          nextPage={nextPage}
          nextTopicSegue={nextTopicSegue}
      />
  );
}
```

**`components/guide/welcome-content.tsx` (Client Component Snippet)**
```tsx
"use client";

import React, { useState } from "react";
import { usePathname } from 'next/navigation';
// ... other imports ...
import { PremiumTabs } from "@/components/premium-tabs";
import { GuideNavigation } from "@/components/guide-navigation";

// Prop types
type PremiumTab = { /* ... */ };
interface PageLink { /* ... */ };
interface WelcomeContentProps {
  tabs: PremiumTab[];
  prevPage: PageLink | null;
  nextPage: PageLink | null;
  nextTopicSegue: string;
}

export default function WelcomeContent({
  tabs,
  prevPage,
  nextPage,
  nextTopicSegue
}: WelcomeContentProps) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <>
      <section className="mb-16">
         <PremiumTabs
           tabs={tabs}
           defaultValue={tabs[0].value}
           currentValue={currentTab}
           onChange={setCurrentTab}
           title="Welcome Overview"
         />
         {/* ... conditional rendering based on currentTab ... */}
      </section>
      <GuideNavigation
        prevPage={prevPage ? { name: prevPage.name, url: prevPage.url } : undefined}
        nextPage={nextPage ? { name: nextPage.name, url: nextPage.url } : undefined}
        currentPageUrl={pathname}
        nextTopicSegue={nextTopicSegue}
      />
    </>
  );
}
```

## Next Steps

Apply the refactoring steps outlined above to any guide pages currently not following this pattern (starting with `app/guide/learning/page.tsx`). 