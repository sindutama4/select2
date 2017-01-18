define(function () {
  // Sundanese Translation by Sindu Tama (sindutama4@gmx.com)
  return {
    errorLoading: function () {
      return 'Data teu kenging dicandak.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return 'Pupuskeun ' + overChars + ' hurup';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return 'Asupkeun ' + remainingChars + ' hurup deui';
    },
    loadingMore: function () {
      return 'Nuju nyandak data…';
    },
    maximumSelected: function (args) {
      return 'Anjeun mung tiasa milih ' + args.maximum + ' piliheun';
    },
    noResults: function () {
      return 'Teu aya data nu saluyu';
    },
    searching: function () {
      return 'Nuju milari…';
    }
  };
});
