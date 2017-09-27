const test = require('assert');
const sut = require('../build/syriac-cal');

describe('Syriac', () => {
  describe('To Cal', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toCal('ܟܬܒܐ');
      const wordExpected = 'ktb)';
      const vocalised = sut.toCal('ܟ݁ܬ݂ܳܒ݂ܳܐ');
      const vocalisedEastern = sut.toCal('ܟ݁ܬ݂ܵܒ݂ܵܐ');
      const vocalisedExpected = "k't,ob,o)";
      test.strictEqual(word, wordExpected, 'sut.toCal_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toCal_generic vocalised'
      );
      test.strictEqual(
        vocalisedEastern,
        vocalisedExpected,
        'sut.toCal_eastern vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toCal('ܕܝܠܝܕܘܬܗ');
      const wordExpected = 'dylydwth';
      const vocalised = sut.toCal('ܕ݁ܺܝܠܺܝܕ݂ܽܘܬ݂ܶܗ');
      const vocalisedExpected = "d'yilyid,wut,eh";
      const vocalisedEastern = sut.toCal('ܕ݁ܝܼܠܝܼܕ݂ܘܼܬ݂ܹܗ');
      test.strictEqual(word, wordExpected, 'sut.toCal_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_yi vocalised');
      test.strictEqual(word, wordExpected, 'sut.toCal_yi consonant');
      test.strictEqual(vocalised, vocalisedEastern, 'sut.toCal_yi eastern');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toCal('ܐܘܠܕ');
      const wordExpected = ')wld';
      const vocalised = sut.toCal('ܐܰܘܠܶܕ݂');
      const vocalisedExpected = ')awled,';
      const vocalisedEastern = sut.toCal('ܐܲܘܠܸܕ݂');
      const vocalisedEsternExpected = ')awlEd,';
      test.strictEqual(word, wordExpected, 'sut.toCal_Ee consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toCal_Ee vocalised');
      test.strictEqual(
        vocalisedEastern,
        vocalisedEsternExpected,
        'sut.toCal_Ee vocalised eastern'
      );
    });
    it('Blank word returns blank', () => {
      const word = sut.toCal('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toCal_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toCal(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toCal_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toCal(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toCal_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toCal(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toCal_zero');
    });
  });
});

describe('Mapped writing', () => {
  it('Consonants length', () => {
    test.strictEqual(
      sut.mapper.fromWriting.consonants.length,
      sut.mapper.toWriting.consonants.length,
      'Length differs'
    );
    test.ok(
      sut.mapper.fromWriting.consonants.length > 22,
      'Length greater than 22'
    );
  });
  it('Vowels length', () => {
    test.strictEqual(
      sut.mapper.fromWriting.vowels.length,
      sut.mapper.toWriting.vowels.length,
      'Length differs'
    );
    test.ok(
      sut.mapper.fromWriting.vowels.length > 10,
      'Length greater than 10'
    );
  });
  it('Diacritics length', () => {
    test.strictEqual(
      sut.mapper.fromWriting.diacritics.length,
      sut.mapper.toWriting.diacritics.length,
      'Length differs'
    );
    test.ok(
      sut.mapper.fromWriting.diacritics.length > 7,
      'Length greater than 7'
    );
  });
});
