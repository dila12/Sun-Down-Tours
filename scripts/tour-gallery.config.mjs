/**
 * Tour gallery sources — add images under the folder (or tour-galleries/{id}/)
 * and re-run `npm run generate-tour-gallery-manifest`. No TypeScript edits needed.
 *
 * Options:
 * - folder: path under src/assets/img
 * - include: optional stem allow-list (filename without extension)
 * - match: optional RegExp source string tested against the stem
 *
 * Folders under src/assets/img/tour-galleries/{id}/ are auto-discovered
 * and override a config entry with the same id when present.
 */
export const TOUR_GALLERIES = {
  'ella-day': { folder: 'onedayTour/ella' },
  'kandy-day': { folder: 'onedayTour/kandy' },
  'galle-day': { folder: 'onedayTour/Galle' },
  'sigiriya-day': { folder: 'onedayTour/Sigiriya' },

  'two-day-ella-yala': { folder: '2daysTours', match: '^\\d+$' },
  'two-day-sigiriya-kandy': { folder: '2daysTours', match: '^\\d+$' },

  'four-day': {
    folder: '5daysTours',
    // High-res gallery set (≥1000px). Avoid Cloudinary-hash 480px thumbs.
    include: [
      'DJI_20240418061903_0457_D',
      '26',
      '2',
      '41',
      '25',
      '38',
    ],
  },
  'five-day': {
    folder: '5daysTours',
    include: [
      '1',
      '3',
      '37',
      '29',
      '10',
      '5',
    ],
  },
  'six-day': { folder: 'SixdaysTous' },
  'seven-day': {
    folder: 'tour-galleries/seven-day',
  },
  'eight-day': {
    folder: '7dayschange',
    include: ['2', '1', 'w3a48osbcocecoaaq9hd', 'tijr5ztiozgdesbxotm4', 'dqzhbtiaqzhf0hxbbrar'],
  },
  'ten-day': {
    folder: '5daysTours',
    include: [
      '6',
      '32',
      '18',
      '9',
      '47',
      '17',
      '22',
    ],
  },
};
