# Guide Page Header Refactoring Checklist

This checklist tracks the refactoring of guide pages to use the new `GuidePageHeader` component.

## Completed Pages
- [x] `app/guide/learning/page.tsx` - Complete with navigation corrected
- [x] `app/guide/flight-training/page.tsx` - Complete with navigation corrected
- [x] `app/guide/resources/page.tsx` - Complete with GuidePageHeader and navigation
- [x] `app/guide/mental-resilience/page.tsx` - Complete with GuidePageHeader and navigation
- [x] `app/guide/knowledge-tests/page.tsx` - Complete with GuidePageHeader and navigation
- [x] `app/guide/checkrides/page.tsx` - Complete with GuidePageHeader and navigation
- [x] `app/guide/professional-pilot/page.tsx` - Complete with GuidePageHeader and navigation
- [x] `app/guide/faq/page.tsx`
- [x] `app/guide/pro-tips/page.tsx` - Complete with GuidePageHeader
- [x] `app/guide/training-expectations/page.tsx` - Complete with GuidePageHeader
- [x] `app/guide/welcome/page.tsx` - Complete with GuidePageHeader

## Pages with Navigation Fixed (but no GuidePageHeader)
- [ ] None remaining in this category

## Pages To Be Refactored

- [ ] None remaining - all pages have been refactored!

## Implementation Notes
- Ensure consistent PageLink format across all pages (`{name, url}`)
- Check for duplicate/conflicting UI elements
- Validate proper JSX tag structure
- Follow sidebar order for navigation between pages 