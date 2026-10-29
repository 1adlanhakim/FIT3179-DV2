# Submission Notes

## Final project counts
- **15 charts** total
- **8 advanced idioms counted conservatively**
- **3 distinct map idioms**: choropleth, dot map, proportional-symbol map
- **4 major public data sources**

## What changed from the previous version
- Added a creative-activity context lollipop chart.
- Added an instrument-participation gender comparison.
- Added AMEB year-on-year examination growth.
- Moved all chart titles into HTML to prevent clipping and make typography consistent.
- Strengthened heatmap luminance contrast and added numeric cell labels.
- Added hover tracing to the bump chart to reduce line-overlap confusion.
- Added a plain-language box-plot explanation.
- Reworded map captions to audience-facing insights rather than technical idiom descriptions.
- Added $8.64m approved-funding headline statistic.
- Strengthened the NSW Department of Education/public-service framing.
- Clarified that ABS instrument participation and Creative Australia “create music” are different measures.
- Clarified that grant values are approved amounts, not expenditure.
- Tightened text width, card alignment, spacing and responsive breakpoints.

## Before you replace your current GitHub page
1. Back up your current repository.
2. Copy this project into the repository root.
3. Run with VS Code Live Server.
4. Test all 15 charts and the 3 maps.
5. Check at 100% zoom on a laptop-width browser.
6. Commit and push only after the local version is correct.

The rubric checklist is in `docs/rubric-checklist.md`.

## Rendering fix — v2
Three Vega-Lite specifications were hardened after browser testing reported failed renders:
- `02-creative-activities-lollipop.json`: replaced layered `-x` sorting with an explicit percentage sort and shared y encoding.
- `04-instrument-by-gender.json`: removed aggregation from the secondary x channel and replaced it with a robust two-bar comparison.
- `07-age-bump.json`: changed the rank scale to an ascending numeric domain with `reverse: true` and simplified hover selection events.
For robustness, shorthand `-x` sorting was also replaced in charts 12 and 15.
