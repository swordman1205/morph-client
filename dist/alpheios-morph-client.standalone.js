/**
 * Base Adapter Class for a Morphology Service Client
 */
class BaseAdapter {
  /**
   * Method which is used to prepare a lookup request according
   * to the adapter specific logic
   * @param {string} lang - the language code
   * @param {string} word - the word to lookup
   * @returns {string} the url for the request
   */
  prepareRequestUrl (lang, word) {
    /** must be overridden in the adapter implementation class **/
    return null
  }

  /**
   * Lookup the supplied word using the preconfigured engines and
   * and return a Homonym
   * @param {string} lang - ISO 639-2 language code for the word
   * @param {string} word - the word to lookup
   * @return {Homonym} homonym object
   */
  async getHomonym (lang, word) {
    // implement in the derived adapater class
    return undefined
  }

  /**
   * Fetch response from a remote URL
   * @param {string} lang - the language code
   * @param {string} word - the word to lookup
   * @returns {Promise} a promse which if successful resolves to json response object
   *                    with the results of the analysis
   */
  fetch (lang, word) {
    let url = this.prepareRequestUrl(lang, word);
    return new Promise((resolve, reject) => {
      if (url) {
        window.fetch(url).then(
          function (response) {
            try {
              if (response.ok) {
                let json = response.json();
                resolve(json);
              } else {
                reject(response.statusText);
              }
            } catch (error) {
              reject(error);
            }
          }
        ).catch((error) => {
          reject(error);
        }
        );
      } else {
        reject(new Error(`Unable to prepare parser request url for ${lang}`));
      }
    })
  }

  /**
   * Fetch test data to test the adapter
   * @param {string} lang - the language code
   * @param {string} word - the word to lookup
   * @returns {Promise} a promse which if successful resolves to json response object
   *                    with the test data
   */
  fetchTestData (lang, word) {
    return new Promise((resolve, reject) => {
      try {
        let data = {};
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * A function that maps a morphological service's specific data types and values into an inflection library standard.
   * @param {object} jsonObj - A JSON data from the fetch request
   * @param {object} targetWord - the original target word of the analysis
   * @returns {Homonym} A library standard Homonym object.
   */
  transform (jsonObj, targetWord) {
    return {}
  }
}

/* eslint-disable no-unused-vars */
const LANG_UNIT_WORD = Symbol('word');
const LANG_UNIT_CHAR = Symbol('char');
const LANG_DIR_LTR = Symbol('ltr');
const LANG_DIR_RTL = Symbol('rtl');
const LANG_UNDEFINED = Symbol('undefined');
const LANG_LATIN = Symbol('latin');
const LANG_GREEK = Symbol('greek');
const LANG_ARABIC = Symbol('arabic');
const LANG_PERSIAN = Symbol('persian');
const STR_LANG_CODE_UNDEFINED = 'undefined';
const STR_LANG_CODE_LAT = 'lat';
const STR_LANG_CODE_LA = 'la';
const STR_LANG_CODE_GRC = 'grc';
const STR_LANG_CODE_ARA = 'ara';
const STR_LANG_CODE_AR = 'ar';
const STR_LANG_CODE_FAS = 'fas';
const STR_LANG_CODE_PER = 'per';
const STR_LANG_CODE_FA_IR = 'fa-IR';
const STR_LANG_CODE_FA = 'fa';
// parts of speech
const POFS_ADJECTIVE = 'adjective';
const POFS_ADVERB = 'adverb';
const POFS_ADVERBIAL = 'adverbial';
const POFS_ARTICLE = 'article';
const POFS_CONJUNCTION = 'conjunction';
const POFS_EXCLAMATION = 'exclamation';
const POFS_INTERJECTION = 'interjection';
const POFS_NOUN = 'noun';
const POFS_NUMERAL = 'numeral';
const POFS_PARTICLE = 'particle';
const POFS_PREFIX = 'prefix';
const POFS_PREPOSITION = 'preposition';
const POFS_PRONOUN = 'pronoun';
const POFS_SUFFIX = 'suffix';
const POFS_SUPINE = 'supine';
const POFS_VERB = 'verb';
const POFS_VERB_PARTICIPLE = 'verb participle';
// gender
const GEND_MASCULINE = 'masculine';
const GEND_FEMININE = 'feminine';
const GEND_NEUTER = 'neuter';
const GEND_COMMON = 'common';
const GEND_ANIMATE = 'animate';
const GEND_INANIMATE = 'inanimate';
// Polish gender types
const GEND_PERSONAL_MASCULINE = 'personal masculine';
const GEND_ANIMATE_MASCULINE = 'animate masculine';
const GEND_INANIMATE_MASCULINE = 'inanimate masculine';
// comparative
const COMP_POSITIVE = 'positive';
const COMP_COMPARITIVE = 'comparative';
const COMP_SUPERLATIVE = 'superlative';
// case
const CASE_ABESSIVE = 'abessive';
const CASE_ABLATIVE = 'ablative';
const CASE_ABSOLUTIVE = 'absolutive';
const CASE_ACCUSATIVE = 'accusative';
const CASE_ADDIRECTIVE = 'addirective';
const CASE_ADELATIVE = 'adelative';
const CASE_ADESSIVE = 'adessive';
const CASE_ADVERBIAL = 'adverbial';
const CASE_ALLATIVE = 'allative';
const CASE_ANTESSIVE = 'antessive';
const CASE_APUDESSIVE = 'apudessive';
const CASE_AVERSIVE = 'aversive';
const CASE_BENEFACTIVE = 'benefactive';
const CASE_CARITIVE = 'caritive';
const CASE_CAUSAL = 'causal';
const CASE_CAUSAL_FINAL = 'causal-final';
const CASE_COMITATIVE = 'comitative';
const CASE_DATIVE = 'dative';
const CASE_DELATIVE = 'delative';
const CASE_DIRECT = 'direct';
const CASE_DISTRIBUTIVE = 'distributive';
const CASE_DISTRIBUTIVE_TEMPORAL = 'distributive-temporal';
const CASE_ELATIVE = 'elative';
const CASE_ERGATIVE = 'ergative';
const CASE_ESSIVE = 'essive';
const CASE_ESSIVE_FORMAL = 'essive-formal';
const CASE_ESSIVE_MODAL = 'essive-modal';
const CASE_EQUATIVE = 'equative';
const CASE_EVITATIVE = 'evitative';
const CASE_EXESSIVE = 'exessive';
const CASE_FINAL = 'final';
const CASE_FORMAL = 'formal';
const CASE_GENITIVE = 'genitive';
const CASE_ILLATIVE = 'illative';
const CASE_INELATIVE = 'inelative';
const CASE_INESSIVE = 'inessive';
const CASE_INSTRUCTIVE = 'instructive';
const CASE_INSTRUMENTAL = 'instrumental';
const CASE_INSTRUMENTAL_COMITATIVE = 'instrumental-comitative';
const CASE_INTRANSITIVE = 'intransitive';
const CASE_LATIVE = 'lative';
const CASE_LOCATIVE = 'locative';
const CASE_MODAL = 'modal';
const CASE_MULTIPLICATIVE = 'multiplicative';
const CASE_NOMINATIVE = 'nominative';
const CASE_PARTITIVE = 'partitive';
const CASE_PEGATIVE = 'pegative';
const CASE_PERLATIVE = 'perlative';
const CASE_POSSESSIVE = 'possessive';
const CASE_POSTELATIVE = 'postelative';
const CASE_POSTDIRECTIVE = 'postdirective';
const CASE_POSTESSIVE = 'postessive';
const CASE_POSTPOSITIONAL = 'postpositional';
const CASE_PREPOSITIONAL = 'prepositional';
const CASE_PRIVATIVE = 'privative';
const CASE_PROLATIVE = 'prolative';
const CASE_PROSECUTIVE = 'prosecutive';
const CASE_PROXIMATIVE = 'proximative';
const CASE_SEPARATIVE = 'separative';
const CASE_SOCIATIVE = 'sociative';
const CASE_SUBDIRECTIVE = 'subdirective';
const CASE_SUBESSIVE = 'subessive';
const CASE_SUBELATIVE = 'subelative';
const CASE_SUBLATIVE = 'sublative';
const CASE_SUPERDIRECTIVE = 'superdirective';
const CASE_SUPERESSIVE = 'superessive';
const CASE_SUPERLATIVE = 'superlative';
const CASE_SUPPRESSIVE = 'suppressive';
const CASE_TEMPORAL = 'temporal';
const CASE_TERMINATIVE = 'terminative';
const CASE_TRANSLATIVE = 'translative';
const CASE_VIALIS = 'vialis';
const CASE_VOCATIVE = 'vocative';
const MOOD_ADMIRATIVE = 'admirative';
const MOOD_COHORTATIVE = 'cohortative';
const MOOD_CONDITIONAL = 'conditional';
const MOOD_DECLARATIVE = 'declarative';
const MOOD_DUBITATIVE = 'dubitative';
const MOOD_ENERGETIC = 'energetic';
const MOOD_EVENTIVE = 'eventive';
const MOOD_GENERIC = 'generic';
const MOOD_GERUNDIVE = 'gerundive';
const MOOD_HYPOTHETICAL = 'hypothetical';
const MOOD_IMPERATIVE = 'imperative';
const MOOD_INDICATIVE = 'indicative';
const MOOD_INFERENTIAL = 'inferential';
const MOOD_INFINITIVE = 'infinitive';
const MOOD_INTERROGATIVE = 'interrogative';
const MOOD_JUSSIVE = 'jussive';
const MOOD_NEGATIVE = 'negative';
const MOOD_OPTATIVE = 'optative';
const MOOD_PARTICIPLE = 'participle';
const MOOD_PRESUMPTIVE = 'presumptive';
const MOOD_RENARRATIVE = 'renarrative';
const MOOD_SUBJUNCTIVE = 'subjunctive';
const MOOD_SUPINE = 'supine';
const NUM_SINGULAR = 'singular';
const NUM_PLURAL = 'plural';
const NUM_DUAL = 'dual';
const NUM_TRIAL = 'trial';
const NUM_PAUCAL = 'paucal';
const NUM_SINGULATIVE = 'singulative';
const NUM_COLLECTIVE = 'collective';
const NUM_DISTRIBUTIVE_PLURAL = 'distributive plural';
const NRL_CARDINAL = 'cardinal';
const NRL_ORDINAL = 'ordinal';
const NRL_DISTRIBUTIVE = 'distributive';
const NURL_NUMERAL_ADVERB = 'numeral adverb';
const ORD_1ST = '1st';
const ORD_2ND = '2nd';
const ORD_3RD = '3rd';
const ORD_4TH = '4th';
const ORD_5TH = '5th';
const ORD_6TH = '6th';
const ORD_7TH = '7th';
const ORD_8TH = '8th';
const ORD_9TH = '9th';
const TENSE_AORIST = 'aorist';
const TENSE_FUTURE = 'future';
const TENSE_FUTURE_PERFECT = 'future perfect';
const TENSE_IMPERFECT = 'imperfect';
const TENSE_PAST_ABSOLUTE = 'past absolute';
const TENSE_PERFECT = 'perfect';
const TENSE_PLUPERFECT = 'pluperfect';
const TENSE_PRESENT = 'present';
const VKIND_TO_BE = 'to be';
const VKIND_COMPOUNDS_OF_TO_BE = 'compounds of to be';
const VKIND_TAKING_ABLATIVE = 'taking ablative';
const VKIND_TAKING_DATIVE = 'taking dative';
const VKIND_TAKING_GENITIVE = 'taking genitive';
const VKIND_TRANSITIVE = 'transitive';
const VKIND_INTRANSITIVE = 'intransitive';
const VKIND_IMPERSONAL = 'impersonal';
const VKIND_DEPONENT = 'deponent';
const VKIND_SEMIDEPONENT = 'semideponent';
const VKIND_PERFECT_DEFINITE = 'perfect definite';
const VOICE_ACTIVE = 'active';
const VOICE_PASSIVE = 'passive';
const VOICE_MEDIOPASSIVE = 'mediopassive';
const VOICE_IMPERSONAL_PASSIVE = 'impersonal passive';
const VOICE_MIDDLE = 'middle';
const VOICE_ANTIPASSIVE = 'antipassive';
const VOICE_REFLEXIVE = 'reflexive';
const VOICE_RECIPROCAL = 'reciprocal';
const VOICE_CAUSATIVE = 'causative';
const VOICE_ADJUTATIVE = 'adjutative';
const VOICE_APPLICATIVE = 'applicative';
const VOICE_CIRCUMSTANTIAL = 'circumstantial';
const VOICE_DEPONENT = 'deponent';
const TYPE_IRREGULAR = 'irregular';
const TYPE_REGULAR = 'regular';
// Classes
const CLASS_PERSONAL = 'personal';
const CLASS_REFLEXIVE = 'reflexive';
const CLASS_POSSESSIVE = 'possessive';
const CLASS_DEMONSTRATIVE = 'demonstrative';
const CLASS_RELATIVE = 'relative';
const CLASS_INTERROGATIVE = 'interrogative';
const CLASS_GENERAL_RELATIVE = 'general relative';
const CLASS_INDEFINITE = 'indefinite';
const CLASS_INTENSIVE = 'intensive';
const CLASS_RECIPROCAL = 'reciprocal';
/* eslit-enable no-unused-vars */


var constants = Object.freeze({
	LANG_UNIT_WORD: LANG_UNIT_WORD,
	LANG_UNIT_CHAR: LANG_UNIT_CHAR,
	LANG_DIR_LTR: LANG_DIR_LTR,
	LANG_DIR_RTL: LANG_DIR_RTL,
	LANG_UNDEFINED: LANG_UNDEFINED,
	LANG_LATIN: LANG_LATIN,
	LANG_GREEK: LANG_GREEK,
	LANG_ARABIC: LANG_ARABIC,
	LANG_PERSIAN: LANG_PERSIAN,
	STR_LANG_CODE_UNDEFINED: STR_LANG_CODE_UNDEFINED,
	STR_LANG_CODE_LAT: STR_LANG_CODE_LAT,
	STR_LANG_CODE_LA: STR_LANG_CODE_LA,
	STR_LANG_CODE_GRC: STR_LANG_CODE_GRC,
	STR_LANG_CODE_ARA: STR_LANG_CODE_ARA,
	STR_LANG_CODE_AR: STR_LANG_CODE_AR,
	STR_LANG_CODE_FAS: STR_LANG_CODE_FAS,
	STR_LANG_CODE_PER: STR_LANG_CODE_PER,
	STR_LANG_CODE_FA_IR: STR_LANG_CODE_FA_IR,
	STR_LANG_CODE_FA: STR_LANG_CODE_FA,
	POFS_ADJECTIVE: POFS_ADJECTIVE,
	POFS_ADVERB: POFS_ADVERB,
	POFS_ADVERBIAL: POFS_ADVERBIAL,
	POFS_ARTICLE: POFS_ARTICLE,
	POFS_CONJUNCTION: POFS_CONJUNCTION,
	POFS_EXCLAMATION: POFS_EXCLAMATION,
	POFS_INTERJECTION: POFS_INTERJECTION,
	POFS_NOUN: POFS_NOUN,
	POFS_NUMERAL: POFS_NUMERAL,
	POFS_PARTICLE: POFS_PARTICLE,
	POFS_PREFIX: POFS_PREFIX,
	POFS_PREPOSITION: POFS_PREPOSITION,
	POFS_PRONOUN: POFS_PRONOUN,
	POFS_SUFFIX: POFS_SUFFIX,
	POFS_SUPINE: POFS_SUPINE,
	POFS_VERB: POFS_VERB,
	POFS_VERB_PARTICIPLE: POFS_VERB_PARTICIPLE,
	GEND_MASCULINE: GEND_MASCULINE,
	GEND_FEMININE: GEND_FEMININE,
	GEND_NEUTER: GEND_NEUTER,
	GEND_COMMON: GEND_COMMON,
	GEND_ANIMATE: GEND_ANIMATE,
	GEND_INANIMATE: GEND_INANIMATE,
	GEND_PERSONAL_MASCULINE: GEND_PERSONAL_MASCULINE,
	GEND_ANIMATE_MASCULINE: GEND_ANIMATE_MASCULINE,
	GEND_INANIMATE_MASCULINE: GEND_INANIMATE_MASCULINE,
	COMP_POSITIVE: COMP_POSITIVE,
	COMP_COMPARITIVE: COMP_COMPARITIVE,
	COMP_SUPERLATIVE: COMP_SUPERLATIVE,
	CASE_ABESSIVE: CASE_ABESSIVE,
	CASE_ABLATIVE: CASE_ABLATIVE,
	CASE_ABSOLUTIVE: CASE_ABSOLUTIVE,
	CASE_ACCUSATIVE: CASE_ACCUSATIVE,
	CASE_ADDIRECTIVE: CASE_ADDIRECTIVE,
	CASE_ADELATIVE: CASE_ADELATIVE,
	CASE_ADESSIVE: CASE_ADESSIVE,
	CASE_ADVERBIAL: CASE_ADVERBIAL,
	CASE_ALLATIVE: CASE_ALLATIVE,
	CASE_ANTESSIVE: CASE_ANTESSIVE,
	CASE_APUDESSIVE: CASE_APUDESSIVE,
	CASE_AVERSIVE: CASE_AVERSIVE,
	CASE_BENEFACTIVE: CASE_BENEFACTIVE,
	CASE_CARITIVE: CASE_CARITIVE,
	CASE_CAUSAL: CASE_CAUSAL,
	CASE_CAUSAL_FINAL: CASE_CAUSAL_FINAL,
	CASE_COMITATIVE: CASE_COMITATIVE,
	CASE_DATIVE: CASE_DATIVE,
	CASE_DELATIVE: CASE_DELATIVE,
	CASE_DIRECT: CASE_DIRECT,
	CASE_DISTRIBUTIVE: CASE_DISTRIBUTIVE,
	CASE_DISTRIBUTIVE_TEMPORAL: CASE_DISTRIBUTIVE_TEMPORAL,
	CASE_ELATIVE: CASE_ELATIVE,
	CASE_ERGATIVE: CASE_ERGATIVE,
	CASE_ESSIVE: CASE_ESSIVE,
	CASE_ESSIVE_FORMAL: CASE_ESSIVE_FORMAL,
	CASE_ESSIVE_MODAL: CASE_ESSIVE_MODAL,
	CASE_EQUATIVE: CASE_EQUATIVE,
	CASE_EVITATIVE: CASE_EVITATIVE,
	CASE_EXESSIVE: CASE_EXESSIVE,
	CASE_FINAL: CASE_FINAL,
	CASE_FORMAL: CASE_FORMAL,
	CASE_GENITIVE: CASE_GENITIVE,
	CASE_ILLATIVE: CASE_ILLATIVE,
	CASE_INELATIVE: CASE_INELATIVE,
	CASE_INESSIVE: CASE_INESSIVE,
	CASE_INSTRUCTIVE: CASE_INSTRUCTIVE,
	CASE_INSTRUMENTAL: CASE_INSTRUMENTAL,
	CASE_INSTRUMENTAL_COMITATIVE: CASE_INSTRUMENTAL_COMITATIVE,
	CASE_INTRANSITIVE: CASE_INTRANSITIVE,
	CASE_LATIVE: CASE_LATIVE,
	CASE_LOCATIVE: CASE_LOCATIVE,
	CASE_MODAL: CASE_MODAL,
	CASE_MULTIPLICATIVE: CASE_MULTIPLICATIVE,
	CASE_NOMINATIVE: CASE_NOMINATIVE,
	CASE_PARTITIVE: CASE_PARTITIVE,
	CASE_PEGATIVE: CASE_PEGATIVE,
	CASE_PERLATIVE: CASE_PERLATIVE,
	CASE_POSSESSIVE: CASE_POSSESSIVE,
	CASE_POSTELATIVE: CASE_POSTELATIVE,
	CASE_POSTDIRECTIVE: CASE_POSTDIRECTIVE,
	CASE_POSTESSIVE: CASE_POSTESSIVE,
	CASE_POSTPOSITIONAL: CASE_POSTPOSITIONAL,
	CASE_PREPOSITIONAL: CASE_PREPOSITIONAL,
	CASE_PRIVATIVE: CASE_PRIVATIVE,
	CASE_PROLATIVE: CASE_PROLATIVE,
	CASE_PROSECUTIVE: CASE_PROSECUTIVE,
	CASE_PROXIMATIVE: CASE_PROXIMATIVE,
	CASE_SEPARATIVE: CASE_SEPARATIVE,
	CASE_SOCIATIVE: CASE_SOCIATIVE,
	CASE_SUBDIRECTIVE: CASE_SUBDIRECTIVE,
	CASE_SUBESSIVE: CASE_SUBESSIVE,
	CASE_SUBELATIVE: CASE_SUBELATIVE,
	CASE_SUBLATIVE: CASE_SUBLATIVE,
	CASE_SUPERDIRECTIVE: CASE_SUPERDIRECTIVE,
	CASE_SUPERESSIVE: CASE_SUPERESSIVE,
	CASE_SUPERLATIVE: CASE_SUPERLATIVE,
	CASE_SUPPRESSIVE: CASE_SUPPRESSIVE,
	CASE_TEMPORAL: CASE_TEMPORAL,
	CASE_TERMINATIVE: CASE_TERMINATIVE,
	CASE_TRANSLATIVE: CASE_TRANSLATIVE,
	CASE_VIALIS: CASE_VIALIS,
	CASE_VOCATIVE: CASE_VOCATIVE,
	MOOD_ADMIRATIVE: MOOD_ADMIRATIVE,
	MOOD_COHORTATIVE: MOOD_COHORTATIVE,
	MOOD_CONDITIONAL: MOOD_CONDITIONAL,
	MOOD_DECLARATIVE: MOOD_DECLARATIVE,
	MOOD_DUBITATIVE: MOOD_DUBITATIVE,
	MOOD_ENERGETIC: MOOD_ENERGETIC,
	MOOD_EVENTIVE: MOOD_EVENTIVE,
	MOOD_GENERIC: MOOD_GENERIC,
	MOOD_GERUNDIVE: MOOD_GERUNDIVE,
	MOOD_HYPOTHETICAL: MOOD_HYPOTHETICAL,
	MOOD_IMPERATIVE: MOOD_IMPERATIVE,
	MOOD_INDICATIVE: MOOD_INDICATIVE,
	MOOD_INFERENTIAL: MOOD_INFERENTIAL,
	MOOD_INFINITIVE: MOOD_INFINITIVE,
	MOOD_INTERROGATIVE: MOOD_INTERROGATIVE,
	MOOD_JUSSIVE: MOOD_JUSSIVE,
	MOOD_NEGATIVE: MOOD_NEGATIVE,
	MOOD_OPTATIVE: MOOD_OPTATIVE,
	MOOD_PARTICIPLE: MOOD_PARTICIPLE,
	MOOD_PRESUMPTIVE: MOOD_PRESUMPTIVE,
	MOOD_RENARRATIVE: MOOD_RENARRATIVE,
	MOOD_SUBJUNCTIVE: MOOD_SUBJUNCTIVE,
	MOOD_SUPINE: MOOD_SUPINE,
	NUM_SINGULAR: NUM_SINGULAR,
	NUM_PLURAL: NUM_PLURAL,
	NUM_DUAL: NUM_DUAL,
	NUM_TRIAL: NUM_TRIAL,
	NUM_PAUCAL: NUM_PAUCAL,
	NUM_SINGULATIVE: NUM_SINGULATIVE,
	NUM_COLLECTIVE: NUM_COLLECTIVE,
	NUM_DISTRIBUTIVE_PLURAL: NUM_DISTRIBUTIVE_PLURAL,
	NRL_CARDINAL: NRL_CARDINAL,
	NRL_ORDINAL: NRL_ORDINAL,
	NRL_DISTRIBUTIVE: NRL_DISTRIBUTIVE,
	NURL_NUMERAL_ADVERB: NURL_NUMERAL_ADVERB,
	ORD_1ST: ORD_1ST,
	ORD_2ND: ORD_2ND,
	ORD_3RD: ORD_3RD,
	ORD_4TH: ORD_4TH,
	ORD_5TH: ORD_5TH,
	ORD_6TH: ORD_6TH,
	ORD_7TH: ORD_7TH,
	ORD_8TH: ORD_8TH,
	ORD_9TH: ORD_9TH,
	TENSE_AORIST: TENSE_AORIST,
	TENSE_FUTURE: TENSE_FUTURE,
	TENSE_FUTURE_PERFECT: TENSE_FUTURE_PERFECT,
	TENSE_IMPERFECT: TENSE_IMPERFECT,
	TENSE_PAST_ABSOLUTE: TENSE_PAST_ABSOLUTE,
	TENSE_PERFECT: TENSE_PERFECT,
	TENSE_PLUPERFECT: TENSE_PLUPERFECT,
	TENSE_PRESENT: TENSE_PRESENT,
	VKIND_TO_BE: VKIND_TO_BE,
	VKIND_COMPOUNDS_OF_TO_BE: VKIND_COMPOUNDS_OF_TO_BE,
	VKIND_TAKING_ABLATIVE: VKIND_TAKING_ABLATIVE,
	VKIND_TAKING_DATIVE: VKIND_TAKING_DATIVE,
	VKIND_TAKING_GENITIVE: VKIND_TAKING_GENITIVE,
	VKIND_TRANSITIVE: VKIND_TRANSITIVE,
	VKIND_INTRANSITIVE: VKIND_INTRANSITIVE,
	VKIND_IMPERSONAL: VKIND_IMPERSONAL,
	VKIND_DEPONENT: VKIND_DEPONENT,
	VKIND_SEMIDEPONENT: VKIND_SEMIDEPONENT,
	VKIND_PERFECT_DEFINITE: VKIND_PERFECT_DEFINITE,
	VOICE_ACTIVE: VOICE_ACTIVE,
	VOICE_PASSIVE: VOICE_PASSIVE,
	VOICE_MEDIOPASSIVE: VOICE_MEDIOPASSIVE,
	VOICE_IMPERSONAL_PASSIVE: VOICE_IMPERSONAL_PASSIVE,
	VOICE_MIDDLE: VOICE_MIDDLE,
	VOICE_ANTIPASSIVE: VOICE_ANTIPASSIVE,
	VOICE_REFLEXIVE: VOICE_REFLEXIVE,
	VOICE_RECIPROCAL: VOICE_RECIPROCAL,
	VOICE_CAUSATIVE: VOICE_CAUSATIVE,
	VOICE_ADJUTATIVE: VOICE_ADJUTATIVE,
	VOICE_APPLICATIVE: VOICE_APPLICATIVE,
	VOICE_CIRCUMSTANTIAL: VOICE_CIRCUMSTANTIAL,
	VOICE_DEPONENT: VOICE_DEPONENT,
	TYPE_IRREGULAR: TYPE_IRREGULAR,
	TYPE_REGULAR: TYPE_REGULAR,
	CLASS_PERSONAL: CLASS_PERSONAL,
	CLASS_REFLEXIVE: CLASS_REFLEXIVE,
	CLASS_POSSESSIVE: CLASS_POSSESSIVE,
	CLASS_DEMONSTRATIVE: CLASS_DEMONSTRATIVE,
	CLASS_RELATIVE: CLASS_RELATIVE,
	CLASS_INTERROGATIVE: CLASS_INTERROGATIVE,
	CLASS_GENERAL_RELATIVE: CLASS_GENERAL_RELATIVE,
	CLASS_INDEFINITE: CLASS_INDEFINITE,
	CLASS_INTENSIVE: CLASS_INTENSIVE,
	CLASS_RECIPROCAL: CLASS_RECIPROCAL
});

class Definition {
  constructor (text, language, format, lemmaText) {
    this.text = text;
    this.language = language;
    this.format = format;
    this.lemmaText = lemmaText;
  }

  static readObject (jsonObject) {
    return new Definition(jsonObject.text, jsonObject.language, jsonObject.format, jsonObject.lemmaText)
  }
}

class DefinitionSet {
  constructor (lemmaWord, languageID) {
    this.lemmaWord = lemmaWord;
    this.languageID = languageID;

    this.shortDefs = [];
    this.fullDefs = [];
  }

  /**
   * A function that is used to instantiate a DefinitionSet object from a JSON object.
   * @param {Object} jsonObject - A JSON object representing DefinitionSet data.
   * @return {DefinitionSet} A DefinitionSet object populated with data from JSON object.
   */
  static readObject (jsonObject) {
    let definitionSet = new DefinitionSet(jsonObject.lemmaWord, jsonObject.languageID);

    for (let shortDef of jsonObject.shortDefs) {
      definitionSet.shortDefs.push(Definition.readObject(shortDef));
    }
    for (let fullDef of jsonObject.fullDefs) {
      definitionSet.fullDefs.push(Definition.readObject(fullDef));
    }

    return definitionSet
  }

  /**
   * Check to see if the DefinitionSet is empty
   * @return {boolean} true if empty false if there is at least one definition
   */
  isEmpty () {
    return this.shortDefs.length === 0 && this.fullDefs.length === 0
  }

  /**
   * Appends one or more definitions to a list of short definitions.
   * @param {Definition | Definition[]} definitions - One or more definition objects to add.
   * @return {Definition[]} A list of short definitions this object has.
   */
  appendShortDefs (definitions) {
    // TODO: check for duplicates?
    if (definitions) {
      if (!Array.isArray(definitions)) { definitions = [definitions]; }
      this.shortDefs = this.shortDefs.concat(definitions);
    }
    return this.shortDefs
  }

  /**
   * Appends one or more definitions to a list of full definitions.
   * @param {Definition | Definition[]} definitions - One or more definition objects to add.
   * @return {Definition[]} A list of full definitions this object has.
   */
  appendFullDefs (definitions) {
    // TODO: check for duplicates?
    if (definitions) {
      if (!Array.isArray(definitions)) { definitions = [definitions]; }
      this.fullDefs = this.fullDefs.concat(definitions);
    }
    return this.fullDefs
  }
}

class FeatureImporter {
  /**
   * @param defaults
   * @param {boolean} returnUnknown - If true, and a source value is not found in the importer,
   * a source value will be returned without any change (a passthrough). If false, an Error
   * will be thrown for unknown source values.
   * @return {FeatureImporter}
   */
  constructor (defaults = [], returnUnknown = false) {
    this.hash = {};
    for (let value of defaults) {
      this.map(value, value);
    }
    this.returnUnknown = returnUnknown;
    return this
  }

  /**
   * Sets mapping between external imported value and one or more library standard values. If an importedValue
   * is already in a hash table, old libraryValue will be overwritten with the new one.
   * @param {string} importedValue - External value
   * @param {Object | Object[] | string | string[]} libraryValue - Library standard value
   */
  map (importedValue, libraryValue) {
    if (!importedValue) {
      throw new Error('Imported value should not be empty.')
    }

    if (!libraryValue) {
      throw new Error('Library value should not be empty.')
    }

    this.hash[importedValue] = libraryValue;
    return this
  }

  /**
   * Checks if value is in a map.
   * @param {string} importedValue - A value to test.
   * @returns {boolean} - Tru if value is in a map, false otherwise.
   */
  has (importedValue) {
    return this.hash.hasOwnProperty(importedValue)
  }

  /**
   * Returns one or more library standard values that match an external value
   * @param {string} sourceValue - External value
   * @returns {Object | string} One or more of library standard values
   */
  get (sourceValue) {
    if (this.has(sourceValue)) {
      return this.hash[sourceValue]
    } else if (this.returnUnknown) {
      return sourceValue
    } else {
      throw new Error('A value "' + sourceValue + '" is not found in the importer.')
    }
  }
}

/**
 * Definition class for a (grammatical) feature. Stores type information and (optionally) all possible values of the feature.
 * It serves as a feature generator. If list of possible values is provided, it can generate a Feature object
 * each time a property that corresponds to a feature value is accessed. If no list of possible values provided,
 * a Feature object can be generated with get(value) method.
 *
 * An order of values determines a default sort and grouping order. If two values should have the same order,
 * they should be grouped within an array: value1, [value2, value3], value4. Here 'value2' and 'value3' have
 * the same priority for sorting and grouping.
 */
class FeatureType {
  // TODO: value checking
  /**
   * Creates and initializes a Feature Type object.
   * @param {string} type - A type of the feature, allowed values are specified in 'types' object.
   * @param {string[] | string[][]} values - A list of allowed values for this feature type.
   * If an empty array is provided, there will be no
   * allowed values as well as no ordering (can be used for items that do not need or have a simple order,
   * such as footnotes).
   * @param {String | Symbol} language - A language of a feature type.
   */
  constructor (type, values, language) {
    if (!values || !Array.isArray(values)) {
      throw new Error('Values should be an array (or an empty array) of values.')
    }
    if (!language) {
      throw new Error('FeatureType constructor requires a language')
    }

    this.type = type;
    this.languageID = undefined;
    this.languageCode = undefined
    ;({languageID: this.languageID, languageCode: this.languageCode} = LanguageModelFactory.getLanguageAttrs(language));

    /*
     This is a sort order index for a grammatical feature values. It is determined by the order of values in
     a 'values' array.
     */
    this._orderIndex = [];
    this._orderLookup = {};

    for (const [index, value] of values.entries()) {
      this._orderIndex.push(value);
      if (Array.isArray(value)) {
        for (let element of value) {
          this[element] = new Feature(this.type, element, this.languageID);
          this._orderLookup[element] = index;
        }
      } else {
        this[value] = new Feature(this.type, value, this.languageID);
        this._orderLookup[value] = index;
      }
    }
  }

  /**
   * This is a compatibility function for legacy code.
   * @return {String} A language code.
   */
  get language () {
    console.warn(`Please use a "languageID" instead of a "language"`);
    return this.languageCode
  }

  /**
   * test to see if this FeatureType allows unrestricted values
   * @returns {boolean} true if unrestricted false if not
   */
  hasUnrestrictedValue () {
    return this.orderedValues.length === 1 && this.orderedValues[0] === FeatureType.UNRESTRICTED_VALUE
  }

  /**
   * Return a Feature with an arbitrary value. This value would not be necessarily present among FeatureType values.
   * This can be especially useful for features that do not set: a list of predefined values, such as footnotes.
   * @param value
   * @param {int} sortOrder
   * @returns {Feature}
   */
  get (value, sortOrder = 1) {
    if (value) {
      return new Feature(this.type, [[value, sortOrder]], this.languageID)
    } else {
      throw new Error('A non-empty value should be provided.')
    }
  }

  /**
   *
   * @param {string[][]} data - An array of value arrays as: [[value1, sortOrder1], [value2, sortOrder2]]
   * @return {Feature}
   */
  getValues (data) {
    return new Feature(this.type, data, this.languageID)
  }

  getFromImporter (importerName, value) {
    let mapped;
    try {
      mapped = this.importer[importerName].get(value);
    } catch (e) {
      // quietly catch not found and replace with default
      mapped = this.get(value);
    }
    return mapped
  }

  /**
   * Creates and returns a new importer with a specific name. If an importer with this name already exists,
   * an existing Importer object will be returned.
   * @param {string} name - A name of an importer object
   * @returns {Importer} A new or existing Importer object that matches a name provided
   */
  addImporter (name) {
    if (!name) {
      throw new Error('Importer should have a non-empty name.')
    }
    this.importer = this.importer || {};
    this.importer[name] = this.importer[name] || new FeatureImporter();
    return this.importer[name]
  }

  /**
   * Return copies of all feature values as Feature objects in a sorted array, according to feature type's sort order.
   * For a similar function that returns strings instead of Feature objects see orderedValues().
   * @returns {Feature[] | Feature[][]} Array of feature values sorted according to orderIndex.
   * If particular feature contains multiple feature values (i.e. `masculine` and `feminine` values combined),
   * an array of Feature objects will be returned instead of a single Feature object, as for single feature values.
   */
  get orderedFeatures () {
    return this.orderedValues.map((value) => new Feature(this.type, value, this.languageID))
  }

  /**
   * Return all feature values as strings in a sorted array, according to feature type's sort order.
   * This is a main method that specifies a sort order of the feature type. orderedFeatures() relies
   * on this method in providing a sorted array of feature values. If you want to create
   * a custom sort order for a particular feature type that will depend on some options that are not type-related,
   * create a wrapper around this function providing it with options arguments so it will be able to decide
   * in what order those features will be based on those arguments.
   * For a similar function that returns Feature objects instead of strings see orderedValues().
   * @returns {string[]} Array of feature values sorted according to orderIndex.
   * If particular feature contains multiple feature values (i.e. `masculine` and `feminine` values combined),
   * an array of strings will be returned instead of a single strings, as for single feature values.
   */
  get orderedValues () {
    return this._orderIndex
  }

  /**
   * Returns a lookup table for type values as:
   *  {value1: order1, value2: order2}, where order is a sort order of an item. If two items have the same sort order,
   *  their order value will be the same.
   * @returns {object}
   */
  get orderLookup () {
    return this._orderLookup
  }

  /**
   * Sets an order of grammatical feature values for a grammatical feature. Used mostly for sorting, filtering,
   * and displaying.
   *
   * @param {Feature[] | Feature[][]} values - a list of grammatical features that specify their order for
   * sorting and filtering. Some features can be grouped as [[genders.masculine, genders.feminine], LibLatin.genders.neuter].
   * It means that genders.masculine and genders.feminine belong to the same group. They will have the same index
   * and will be stored inside an _orderIndex as an array. genders.masculine and genders.feminine will be grouped together
   * during filtering and will be in the same bin during sorting.
   *
   */
  set order (values) {
    if (!values || (Array.isArray(values) && values.length === 0)) {
      throw new Error('A non-empty list of values should be provided.')
    }

    // If a single value is provided, convert it into an array
    if (!Array.isArray(values)) {
      values = [values];
    }

    for (let value of values) {
      if (Array.isArray(value)) {
        for (let element of value) {
          if (!this.hasOwnProperty(element.value)) {
            throw new Error('Trying to order an element with "' + element.value + '" value that is not stored in a "' + this.type + '" type.')
          }

          if (element.type !== this.type) {
            throw new Error('Trying to order an element with type "' + element.type + '" that is different from "' + this.type + '".')
          }

          if (!LanguageModelFactory.compareLanguages(element.languageID, this.languageID)) {
            throw new Error(`Trying to order an element with language "${element.languageID.toString()}" that is different from "${this.languageID.toString()}"`)
          }
        }
      } else {
        if (!this.hasOwnProperty(value.value)) {
          throw new Error('Trying to order an element with "' + value.value + '" value that is not stored in a "' + this.type + '" type.')
        }

        if (value.type !== this.type) {
          throw new Error('Trying to order an element with type "' + value.type + '" that is different from "' + this.type + '".')
        }

        if (!LanguageModelFactory.compareLanguages(value.languageID, this.languageID)) {
          throw new Error(`Trying to order an element with language "${value.languageID.toString()}" that is different from "${this.languageID.toString()}"`)
        }
      }
    }

    // Erase whatever sort order was set previously
    this._orderLookup = {};
    this._orderIndex = [];

    // Define a new sort order
    for (const [index, element] of values.entries()) {
      if (Array.isArray(element)) {
        // If it is an array, all values should have the same order
        let elements = [];
        for (const subElement of element) {
          this._orderLookup[subElement.value] = index;
          elements.push(subElement.value);
        }
        this._orderIndex[index] = elements;
      } else {
        // If is a single value
        this._orderLookup[element.value] = index;
        this._orderIndex[index] = element.value;
      }
    }
  }
}
FeatureType.UNRESTRICTED_VALUE = Symbol('unrestricted');

class InflectionGroupingKey {
  /**
   * @constructor
   * @param {Inflection} infl inflection with features which are used as a grouping key
   * @param {string[]} features array of feature names which are used as the key
   * @param {Object} extras extra property name and value pairs used in the key
   */
  constructor (infl, features, extras = {}) {
    for (let feature of features) {
      this[feature] = infl[feature];
    }
    Object.assign(this, extras);
  }

  /**
   * checks if a feature with a specific value
   * is included in the grouping key
   * @returns {boolean} true if found, false if not
   */
  hasFeatureValue (feature, value) {
    if (this.hasOwnProperty(feature)) {
      return this[feature].values.includes(value)
    }
    return false
  }

  /**
   * Return this key as a string
   * @returns {string} string representation of the key
   */
  toString () {
    let values = [];
    for (let prop of Object.getOwnPropertyNames(this).sort()) {
      // A prop can be either a Feature object, or a one of the extras of a string type
      let value = (this[prop] instanceof Feature) ? this[prop].values.sort().join(',') : this[prop];
      values.push(value);
    }
    return values.join(' ')
  }
}

class InflectionGroup {
  /**
   * A group of inflections or groups of inflections
   *
   * @param {InflectionGroupingKey} groupingKey features of the inflections in the group
   * @param {Inflection[]|InflectionGroup[]} inflections array of Inflections or InflectionGroups in this group
   */
  constructor (groupingKey, inflections = [], sortKey = null) {
    this.groupingKey = groupingKey;
    this.inflections = inflections;
  }

  /**
   * Add an Inflection or InflectionGroup to the group
   * @param {Inflection|InflectionGroup} inflection
   */
  append (inflection) {
    this.inflections.push(inflection);
  }
}

/**
 * @class  LanguageModel is the base class for language-specific behavior
 */
class LanguageModel {
  constructor () {
    // This is just to avoid JavaScript Standard error on `context_backward` getter name. Don't need a constructor otherwise
    // TODO: `contextBackward` shall be used instead of `context_backward` wherever it is used
    this.context_backward = LanguageModel.contextBackward;
  }

  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return LANG_DIR_LTR }
  static get baseUnit () { return LANG_UNIT_WORD }

  /**
   * @deprecated
   */
  get contextForward () {
    console.warn(`Please use static "contextForward" instead`);
    return this.constructor.contextForward
  }

  /**
   * @deprecated
   */
  get contextBackward () {
    console.warn(`Please use static "contextBackward" instead`);
    return this.constructor.contextBackward
  }

  /**
   * @deprecated
   */
  get direction () {
    console.warn(`Please use static "direction" instead`);
    return this.constructor.direction
  }

  /**
   * @deprecated
   */
  get baseUnit () {
    console.warn(`Please use static "baseUnit" instead`);
    return this.constructor.baseUnit
  }

  /**
   * @deprecated
   */
  get features () {
    console.warn(`Please use individual "getFeatureType" or static "features" instead`);
    return this.constructor.features
  }

  /**
   * Returns a list of names of feature types that are defined in a language model.
   * @return {string[]} Names of features that are defined in a model.
   */
  static get featureNames () {
    return this.featureValues.keys()
  }

  /**
   * Returns a feature a `featureType` name that is defined for a language. It does not create a new Feature
   * object instance. It returns the one defined in a language model. To get a new instance of a Feature
   * object, use `getFeature` instead.
   * If no feature of `featureType` is defined in a language model, throws an error.
   * @param {string} featureType - A feature type name.
   * @return {Feature} A feature object of requested type.
   */
  static typeFeature (featureType) {
    if (this.typeFeatures.has(featureType)) {
      return this.typeFeatures.get(featureType)
    } else {
      throw new Error(`Type feature "${featureType}" is not defined within "${this}"`)
    }
  }

  /**
   * Returns a map with Feature objects of all features defined in a language. Use this method to get all
   * Feature objects defined in a language model.
   * @return {Map} Feature objects for all features defined within a language in a Map object. The key is
   * a feature type (a string), and the value is a Feature object.
   */
  static get typeFeatures () {
    console.warn(`This getter must be defined in a descendant class`);
  }

  static get features () {
    let features = {};
    for (const featureName of this.featureNames) {
      features[featureName] = this.getFeature(featureName);
    }
    return features
  }

  static get languageID () {
    return LANG_UNDEFINED
  }

  static get languageCode () {
    return STR_LANG_CODE_UNDEFINED
  }

  /**
   * Returns an array of language codes that represents the language.
   * @return {String[]} An array of language codes that matches the language.
   */
  static get languageCodes () {
    return []
  }

  static get codes () {
    console.warn(`Use static "languageCodes" instead`);
    return this.languageCodes
  }

  /**
   * @deprecated
   * @return {String[]}
   */
  get codes () {
    console.warn(`Please use a static version of "codes" instead`);
    return this.constructor.languageCodes
  }

  /**
   * @deprecated
   * @return {string}
   */
  toCode () {
    console.warn(`Please use a static "languageCode" instead`);
    return this.constructor.languageCode
  }

  /**
   * @deprecated
   * @return {string}
   */
  static toCode () {
    console.warn(`Please use a static "languageCode" instead`);
    return this.languageCode
  }

  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      [
        Feature.types.part,
        [
          POFS_ADVERB,
          POFS_ADVERBIAL,
          POFS_ADJECTIVE,
          POFS_ARTICLE,
          POFS_CONJUNCTION,
          POFS_EXCLAMATION,
          POFS_INTERJECTION,
          POFS_NOUN,
          POFS_NUMERAL,
          POFS_PARTICLE,
          POFS_PREFIX,
          POFS_PREPOSITION,
          POFS_PRONOUN,
          POFS_SUFFIX,
          POFS_SUPINE,
          POFS_VERB,
          POFS_VERB_PARTICIPLE
        ]
      ],
      [
        Feature.types.gender,
        [
          GEND_MASCULINE,
          GEND_FEMININE,
          GEND_NEUTER
        ]
      ],
      [
        Feature.types.type,
        [
          TYPE_REGULAR,
          TYPE_IRREGULAR
        ]
      ],
      [
        Feature.types.person,
        [
          ORD_1ST,
          ORD_2ND,
          ORD_3RD
        ]
      ],
      [
        Feature.types.age,
        []
      ],
      [
        Feature.types.area,
        []
      ],
      [
        Feature.types.source,
        []
      ],
      [
        Feature.types.frequency,
        []
      ],
      [
        Feature.types.geo,
        []
      ],
      [
        Feature.types.pronunciation,
        []
      ],
      [
        Feature.types.kind,
        []
      ],
      [
        Feature.types.comparison,
        []
      ],
      [
        Feature.types.morph,
        []
      ],
      [
        Feature.types.stemtype,
        []
      ],
      [
        Feature.types.derivtype,
        []
      ]
    ])
  }

  /**
   * @deprecated
   * @return {symbol} Returns a language ID
   */
  static get sourceLanguage () {
    console.warn(`Please use languageID directly`);
    return this.languageID
  }

  /**
   * @deprecated
   * @return {symbol} Returns a language ID
   */
  get sourceLanguage () {
    console.warn(`Please use languageID directly`);
    return this.constructor.languageID
  }

  /**
   * @deprecated
   * @param name
   * @return {FeatureType}
   */
  static getFeatureType (name) {
    console.warn('Please use getFeature instead');
    let featureValues = this.featureValues;
    if (featureValues.has(name)) {
      return new FeatureType(name, featureValues.get(name), this.languageID)
    } else {
      throw new Error(`Feature "${name}" is not defined`)
    }
  }

  /**
   * Returns a new instance of a feature with `featureType`. It uses a feature defined in a language model
   * as a master.
   * @param {string} featureType - A name of a feature type.
   * @return {Feature} - A newly created Feature object.
   */
  static getFeature (featureType) {
    let featureValues = this.featureValues; // To cache the values
    if (featureValues.has(featureType)) {
      let allowedValues = featureValues.get(featureType);
      return new Feature(featureType, allowedValues, this.languageID, 1, allowedValues)
    } else {
      throw new Error(`Feature "${featureType}" is not defined`)
    }
  }

  _initializeFeatures () {
    let features = {};
    for (const featureName of this.constructor.featureValues.keys()) {
      features[featureName] = this.constructor.getFeature(featureName);
    }
    return features
  }

  /**
   * @deprecated
   */
  grammarFeatures () {
    console.warn(`Please use a static version of "grammarFeatures" instead`);
    return this.constructor.grammarFeatures()
  }

  /**
   * Identify the morphological features which should be linked to a grammar.
   * @returns {String[]} Array of Feature types
   */
  static grammarFeatures () {
    return []
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * Check to see if the supplied language code is supported by this tool
   * @param {string} code the language code
   * @returns true if supported false if not
   * @type Boolean
   */
  static supportsLanguage (code) {
    return this.languageCodes.includes[code]
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {string} word the source word
   * @returns the normalized form of the word (default version just returns the same word,
   *          override in language-specific subclass)
   * @type String
   */
  static normalizeWord (word) {
    return word
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    return []
  }

  alternateWordEncodings (word, preceding, following, encoding) {
    console.warn(`Please use static "alternateWordEncodings" instead`);
    return this.constructor.alternateWordEncodings(word, preceding, following, encoding)
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return '.,;:!?\'"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r'
  }

  /**
   * @deprecated
   * @return {String}
   */
  getPunctuation () {
    console.warn(`Please use a static version of "getPunctuation"`);
    return this.constructor.getPunctuation()
  }

  toString () {
    return String(this.constructor.languageCode)
  }

  isEqual (model) {
    return LanguageModelFactory.compareLanguages(this.languageID, model.languageID)
  }

  /*
  There are two types of language identificators: language IDs and language code. Language ID is a symbol constant
  defined in constants.js, such as LANG_LATIN or LANG_GREEK. Language code is a string containing (usually)
  a three-letter language codes such as 'lat' or 'la' for latin. There can be multiple language codes that identify
  the same language, but there is only one unique language ID for each language.
   */

  /**
   * Checks whether a language has a particular language code in its list of codes
   * @param {String} languageCode - A language code to check
   * @return {boolean} Whether this language code exists in a language code list
   */
  static hasCode (languageCode) {
    if (this.isLanguageCode(languageCode)) {
      return this.languageCodes.includes(languageCode)
    } else {
      throw new Error(`Format of a "${languageCode}" is incorrect`)
    }
  }

  /**
   * Tests wither a provided language identificator is a language ID.
   * @param {Symbol | string} language - A language identificator, either a Symbol or a string language code.
   * @return {boolean} True if language identificator provided is a language ID.
   */
  static isLanguageID (language) {
    return (typeof language === 'symbol')
  }

  /**
   * Tests wither a provided language identificator is a language code.
   * @param {Symbol | string} language - A language identificator, either a Symbol or a string language code.
   * @return {boolean} - True if language identificator provided is a language code.
   */
  static isLanguageCode (language) {
    return !LanguageModel.isLanguageID(language)
  }

  /**
   * @deprecated
   * @param node
   */
  canInflect (node) {
    console.warn(`Please use a static version of "canInflect" instead`);
    return this.constructor.canInflect(node)
  }

  /**
   * Groups a set of inflections according to a language-specific display paradigm
   * The default groups according to the following logic:
   *   1. groups of groups with unique stem, prefix, suffix, part of speech, declension, dialect and comparison
   *     2. groups of those groups with unique
   *          number, if it's an inflection with a grammatical case
   *          tense, if it's an inflection with tense but no case (i.e. a verb)
   *          verbs without tense or case
   *          adverbs
   *          everything else
   *       3. groups of those groups with unique voice and tense
   *         4. groups of inflections with unique gender, person, mood, and sort
   */
  static groupInflectionsForDisplay (inflections) {
    let grouped = new Map();

    // group inflections by part of speech
    for (let infl of inflections) {
      let groupingKey = new InflectionGroupingKey(infl,
        [Feature.types.part, Feature.types.declension, Feature.types.dialect, Feature.types.comparison],
        {
          prefix: infl.prefix,
          suffix: infl.suffix,
          stem: infl.stem
        }
      );
      let groupingKeyStr = groupingKey.toString();
      if (grouped.has(groupingKeyStr)) {
        grouped.get(groupingKeyStr).append(infl);
      } else {
        grouped.set(groupingKeyStr, new InflectionGroup(groupingKey, [infl]));
      }
    }

    // iterate through each group key to group the inflections in that group
    for (let kv of grouped) {
      let inflgrp = new Map();
      for (let infl of kv[1].inflections) {
        let keyprop;
        let isCaseInflectionSet = false;
        if (infl[Feature.types.grmCase]) {
          // grouping on number if case is defined
          keyprop = Feature.types.number;
          isCaseInflectionSet = true;
        } else if (infl[Feature.types.tense]) {
          // grouping on tense if tense is defined but not case
          keyprop = Feature.types.tense;
        } else if (infl[Feature.types.part] === POFS_VERB) {
          // grouping on no case or tense but a verb
          keyprop = Feature.types.part;
        } else if (infl[Feature.types.part] === POFS_ADVERB) {
          keyprop = Feature.types.part;
          // grouping on adverbs without case or tense
        } else {
          keyprop = 'misc';
          // grouping on adverbs without case or tense
          // everything else
        }
        let groupingKey = new InflectionGroupingKey(infl, [keyprop], {isCaseInflectionSet: isCaseInflectionSet});
        let groupingKeyStr = groupingKey.toString();
        if (inflgrp.has(groupingKeyStr)) {
          inflgrp.get(groupingKeyStr).append(infl);
        } else {
          inflgrp.set(groupingKeyStr, new InflectionGroup(groupingKey, [infl]));
        }
      }
      // inflgrp is now a map of groups of inflections grouped by
      //  inflections with number
      //  inflections without number but with tense
      //  inflections of verbs without tense
      //  inflections of adverbs
      //  everything else
      // iterate through each inflection group key to group the inflections in that group by tense and voice
      for (let kv of inflgrp) {
        let nextGroup = new Map();
        let sortOrder = new Map();
        for (let infl of kv[1].inflections) {
          let sortkey = infl[Feature.types.grmCase] ? Math.max(infl[Feature.types.grmCase].items.map(f => f.sortOrder)) : 1;
          let groupingKey = new InflectionGroupingKey(infl, [Feature.types.tense, Feature.types.voice]);
          let groupingKeyStr = groupingKey.toString();
          if (nextGroup.has(groupingKeyStr)) {
            nextGroup.get(groupingKeyStr).append(infl);
          } else {
            nextGroup.set(groupingKeyStr, new InflectionGroup(groupingKey, [infl], sortkey));
            sortOrder.set(groupingKeyStr, sortkey);
          }
        }
        kv[1].inflections = [];
        let sortedKeys = Array.from(nextGroup.keys()).sort(
          (a, b) => {
            let orderA = sortOrder.get(a);
            let orderB = sortOrder.get(b);
            return orderA > orderB ? -1 : orderB > orderA ? 1 : 0
          }
        );
        for (let groupkey of sortedKeys) {
          kv[1].inflections.push(nextGroup.get(groupkey));
        }
      }

      // inflgrp is now a Map of groups of groups of inflections

      for (let kv of inflgrp) {
        let groups = kv[1];
        for (let group of groups.inflections) {
          let nextGroup = new Map();
          for (let infl of group.inflections) {
            // set key is case comp gend pers mood sort
            let groupingKey = new InflectionGroupingKey(infl,
              [Feature.types.grmCase, Feature.types.comparison, Feature.types.gender, Feature.types.number, Feature.types.person,
                Feature.types.tense, Feature.types.mood, Feature.types.voice]);
            let groupingKeyStr = groupingKey.toString();
            if (nextGroup.has(groupingKeyStr)) {
              nextGroup.get(groupingKeyStr).append(infl);
            } else {
              nextGroup.set(groupingKeyStr, new InflectionGroup(groupingKey, [infl]));
            }
          }
          group.inflections = Array.from(nextGroup.values()); // now a group of inflection groups
        }
      }
      kv[1].inflections = Array.from(inflgrp.values());
    }
    return Array.from(grouped.values())
  }

  /**
   * @deprecated
   * @param inflections
   * @return {*}
   */
  groupInflectionsForDisplay (inflections) {
    console.warn(`Please use a static version of "groupInflectionsForDisplay" instead`);
    return this.constructor.groupInflectionsForDisplay(inflections)
  }
}

let typeFeatures = new Map();
let typeFeaturesInitialized = false;

/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class LatinLanguageModel extends LanguageModel {
  static get languageID () { return LANG_LATIN }
  static get languageCode () { return STR_LANG_CODE_LAT }
  static get languageCodes () { return [STR_LANG_CODE_LA, STR_LANG_CODE_LAT] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return LANG_DIR_LTR }
  static get baseUnit () { return LANG_UNIT_WORD }

  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      ...LanguageModel.featureValues,
      [
        Feature.types.grmClass,
        [
          CLASS_PERSONAL,
          CLASS_REFLEXIVE,
          CLASS_POSSESSIVE,
          CLASS_DEMONSTRATIVE,
          CLASS_RELATIVE,
          CLASS_INTERROGATIVE
        ]
      ],
      [
        Feature.types.number,
        [
          NUM_SINGULAR,
          NUM_PLURAL
        ]
      ],
      [
        Feature.types.grmCase,
        [
          CASE_NOMINATIVE,
          CASE_GENITIVE,
          CASE_DATIVE,
          CASE_ACCUSATIVE,
          CASE_ABLATIVE,
          CASE_LOCATIVE,
          CASE_VOCATIVE
        ]
      ],
      [
        Feature.types.declension,
        [
          ORD_1ST,
          ORD_2ND,
          ORD_3RD,
          ORD_4TH,
          ORD_5TH
        ]
      ],
      [
        Feature.types.tense,
        [
          TENSE_PRESENT,
          TENSE_IMPERFECT,
          TENSE_FUTURE,
          TENSE_PERFECT,
          TENSE_PLUPERFECT,
          TENSE_FUTURE_PERFECT
        ]
      ],
      [
        Feature.types.voice,
        [
          VOICE_ACTIVE,
          VOICE_PASSIVE
        ]
      ],
      [
        Feature.types.mood,
        [
          MOOD_INDICATIVE,
          MOOD_SUBJUNCTIVE,
          MOOD_IMPERATIVE,
          MOOD_PARTICIPLE,
          MOOD_SUPINE,
          MOOD_GERUNDIVE,
          MOOD_PARTICIPLE,
          MOOD_INFINITIVE
        ]
      ],
      [
        Feature.types.conjugation,
        [
          ORD_1ST,
          ORD_2ND,
          ORD_3RD,
          ORD_4TH
        ]
      ]
    ])
  }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) { this.initTypeFeatures(); }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName));
    }
    typeFeaturesInitialized = true;
  }

  /**
   * @override LanguageModel#grammarFeatures
   */
  static grammarFeatures () {
    // TODO this ideally might be grammar specific
    return [Feature.types.part, Feature.types.grmCase, Feature.types.mood, Feature.types.declension, Feature.types.tense]
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return true
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {String} word the source word
   * @returns the normalized form of the word (Latin replaces accents and special chars)
   * @type String
   */
  static normalizeWord (word) {
    if (word) {
      word = word.replace(/[\u00c0\u00c1\u00c2\u00c3\u00c4\u0100\u0102]/g, 'A');
      word = word.replace(/[\u00c8\u00c9\u00ca\u00cb\u0112\u0114]/g, 'E');
      word = word.replace(/[\u00cc\u00cd\u00ce\u00cf\u012a\u012c]/g, 'I');
      word = word.replace(/[\u00d2\u00d3\u00d4\u00df\u00d6\u014c\u014e]/g, 'O');
      word = word.replace(/[\u00d9\u00da\u00db\u00dc\u016a\u016c]/g, 'U');
      word = word.replace(/[\u00c6\u01e2]/g, 'AE');
      word = word.replace(/[\u0152]/g, 'OE');
      word = word.replace(/[\u00e0\u00e1\u00e2\u00e3\u00e4\u0101\u0103]/g, 'a');
      word = word.replace(/[\u00e8\u00e9\u00ea\u00eb\u0113\u0115]/g, 'e');
      word = word.replace(/[\u00ec\u00ed\u00ee\u00ef\u012b\u012d\u0129]/g, 'i');
      word = word.replace(/[\u00f2\u00f3\u00f4\u00f5\u00f6\u014d\u014f]/g, 'o');
      word = word.replace(/[\u00f9\u00fa\u00fb\u00fc\u016b\u016d]/g, 'u');
      word = word.replace(/[\u00e6\u01e3]/g, 'ae');
      word = word.replace(/[\u0153]/g, 'oe');
    }
    return word
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // Not implemented yet
    return []
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }

  /**
   * Sets inflection grammar properties based on its characteristics
   * @param {Inflection} inflection - An inflection object
   * @return {Object} Inflection properties
   */
  static getInflectionConstraints (inflection) {
    let grammar = {
      fullFormBased: false,
      suffixBased: false,
      pronounClassRequired: false
    };
    if (inflection.hasOwnProperty(Feature.types.part)) {
      if (inflection[Feature.types.part].value === POFS_PRONOUN) {
        grammar.fullFormBased = true;
      } else {
        grammar.suffixBased = true;
      }
    } else {
      console.warn(`Unable to set grammar: part of speech data is missing or is incorrect`, inflection[Feature.types.part]);
    }

    return grammar
  }
}

let typeFeatures$1 = new Map();
let typeFeaturesInitialized$1 = false;
/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class GreekLanguageModel extends LanguageModel {
  static get languageID () { return LANG_GREEK }
  static get languageCode () { return STR_LANG_CODE_GRC }
  static get languageCodes () { return [STR_LANG_CODE_GRC] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return LANG_DIR_LTR }
  static get baseUnit () { return LANG_UNIT_WORD }

  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      ...LanguageModel.featureValues,
      [
        Feature.types.grmClass,
        [
          CLASS_DEMONSTRATIVE,
          CLASS_GENERAL_RELATIVE,
          CLASS_INDEFINITE,
          CLASS_INTENSIVE,
          CLASS_INTERROGATIVE,
          CLASS_PERSONAL,
          CLASS_POSSESSIVE,
          CLASS_RECIPROCAL,
          CLASS_REFLEXIVE,
          CLASS_RELATIVE
        ]
      ],
      [
        Feature.types.number,
        [
          NUM_SINGULAR,
          NUM_PLURAL,
          NUM_DUAL
        ]
      ],
      [
        Feature.types.grmCase,
        [
          CASE_NOMINATIVE,
          CASE_GENITIVE,
          CASE_DATIVE,
          CASE_ACCUSATIVE,
          CASE_VOCATIVE
        ]
      ],
      [
        Feature.types.declension,
        [
          ORD_1ST,
          ORD_2ND,
          ORD_3RD
        ]
      ],
      [
        Feature.types.tense,
        [
          TENSE_PRESENT,
          TENSE_IMPERFECT,
          TENSE_FUTURE,
          TENSE_PERFECT,
          TENSE_PLUPERFECT,
          TENSE_FUTURE_PERFECT,
          TENSE_AORIST
        ]
      ],
      [
        Feature.types.voice,
        [
          VOICE_PASSIVE,
          VOICE_ACTIVE,
          VOICE_MEDIOPASSIVE,
          VOICE_MIDDLE
        ]
      ],
      [
        Feature.types.mood,
        [
          MOOD_INDICATIVE,
          MOOD_SUBJUNCTIVE,
          MOOD_OPTATIVE,
          MOOD_IMPERATIVE
        ]
      ],
      [
        // TODO full list of greek dialects
        Feature.types.dialect,
        [
          'attic',
          'epic',
          'doric'
        ]
      ]
    ])
  }

  static get typeFeatures () {
    if (!typeFeaturesInitialized$1) { this.initTypeFeatures(); }
    return typeFeatures$1
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures$1.set(featureName, this.getFeature(featureName));
    }
    typeFeaturesInitialized$1 = true;
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return true
  }

  /**
   * @override LanguageModel#grammarFeatures
   */
  static grammarFeatures () {
    // TODO this ideally might be grammar specific
    return [Feature.types.part, Feature.types.grmCase, Feature.types.mood, Feature.types.declension, Feature.types.tense, Feature.types.voice]
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {string} word the source word
   * @returns {string} the normalized form of the word (default version just returns the same word,
   *          override in language-specific subclass)
   * @type string
   */
  static normalizeWord (word) {
    // we normalize greek to NFC - Normalization Form Canonical Composition
    if (word) {
      return word.normalize('NFC')
    } else {
      return word
    }
  }

  /**
   * @override LanguageModel#alternateWordEncodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // the original alpheios code used the following normalizations
    // 1. When looking up a lemma
    //    stripped vowel length
    //    stripped caps
    //    then if failed, tried again with out these
    // 2. when adding to a word list
    //    precombined unicode (vowel length/diacritics preserved)
    // 2. When looking up a verb in the verb paradigm tables
    //    it set e_normalize to false, otherwise it was true...
    // make sure it's normalized to NFC and in lower case
    let normalized = GreekLanguageModel.normalizeWord(word).toLocaleLowerCase();
    let strippedVowelLength = normalized.replace(
      /[\u{1FB0}\u{1FB1}]/ug, '\u{03B1}').replace(
      /[\u{1FB8}\u{1FB9}]/ug, '\u{0391}').replace(
      /[\u{1FD0}\u{1FD1}]/ug, '\u{03B9}').replace(
      /[\u{1FD8}\u{1FD9}]/ug, '\u{0399}').replace(
      /[\u{1FE0}\u{1FE1}]/ug, '\u{03C5}').replace(
      /[\u{1FE8}\u{1FE9}]/ug, '\u{03A5}').replace(
      /[\u{00AF}\u{0304}\u{0306}]/ug, '');
    let strippedDiaeresis = normalized.replace(
      /\u{0390}/ug, '\u{03AF}').replace(
      /\u{03AA}/ug, '\u{0399}').replace(
      /\u{03AB}/ug, '\u{03A5}').replace(
      /\u{03B0}/ug, '\u{03CD}').replace(
      /\u{03CA}/ug, '\u{03B9}').replace(
      /\u{03CB}/ug, '\u{03C5}').replace(
      /\u{1FD2}/ug, '\u{1F76}').replace(
      /\u{1FD3}/ug, '\u{1F77}').replace(
      /\u{1FD7}/ug, '\u{1FD6}').replace(
      /\u{1FE2}/ug, '\u{1F7A}').replace(
      /\u{1FE3}/ug, '\u{1F7B}').replace(
      /\u{1FE7}/ug, '\u{1FE6}').replace(
      /\u{1FC1}/ug, '\u{1FC0}').replace(
      /\u{1FED}/ug, '\u{1FEF}').replace(
      /\u{1FEE}/ug, '\u{1FFD}').replace(
      /[\u{00A8}\u{0308}]/ug, '');
    if (encoding === 'strippedDiaeresis') {
      return [strippedDiaeresis]
    } else {
      return [strippedVowelLength]
    }
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return '.,;:!?\'"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r'
  }

  /**
   * Sets inflection grammar properties based on its characteristics
   * @param {Inflection} inflection - An inflection object
   * @return {Object} Inflection properties
   */
  static getInflectionConstraints (inflection) {
    let constraints = {
      fullFormBased: false,
      suffixBased: false,
      pronounClassRequired: false
    };
    if (inflection.hasOwnProperty(Feature.types.part)) {
      if (inflection[Feature.types.part].value === POFS_PRONOUN) {
        constraints.fullFormBased = true;
      } else {
        constraints.suffixBased = true;
      }
    } else {
      console.warn(`Unable to set grammar: part of speech data is missing or is incorrect`, inflection[Feature.types.part]);
    }

    constraints.pronounClassRequired =
      LanguageModelFactory.compareLanguages(GreekLanguageModel.languageID, inflection.languageID) &&
      inflection.hasOwnProperty(Feature.types.part) &&
      inflection[Feature.types.part].value === POFS_PRONOUN;

    return constraints
  }

  /**
   * Determines a class of a given word (pronoun) by finding a matching word entry(ies)
   * in a pronoun source info (`forms`) and getting a single or multiple classes of those entries.
   * Some morphological analyzers provide class information that is unreliable or do not
   * provide class information at all. However, class information is essential in
   * deciding in what table should pronouns be grouped. For this, we have to
   * determine pronoun classes using this method.
   * @param {Form[]} forms - An array of known forms of pronouns.
   * @param {string} word - A word we need to find a matching class for.
   * @param {boolean} normalize - Whether normalized forms of words shall be used for comparison.
   * @return {Feature} Matching classes found within a Feature objects. If no matching classes found,
   * returns undefined.
   */
  static getPronounClasses (forms, word, normalize = true) {
    let matchingValues = new Set(); // Will eliminate duplicated values
    let matchingForms = forms.filter(
      form => {
        let match = false;
        if (form.value) {
          match = normalize
            ? GreekLanguageModel.normalizeWord(form.value) === GreekLanguageModel.normalizeWord(word)
            : form.value === word;
        }
        return match
      }
    );
    for (const matchingForm of matchingForms) {
      if (matchingForm.features.hasOwnProperty(Feature.types.grmClass)) {
        matchingValues.add(matchingForm.features[Feature.types.grmClass]);
      }
    }
    if (matchingValues.size > 0) {
      return new Feature(Feature.types.grmClass, Array.from(matchingValues), GreekLanguageModel.languageID)
    }
  }
}

let typeFeatures$2 = new Map();
let typeFeaturesInitialized$2 = false;

/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class ArabicLanguageModel extends LanguageModel {
  static get languageID () { return LANG_ARABIC }
  static get languageCode () { return STR_LANG_CODE_ARA }
  static get languageCodes () { return [STR_LANG_CODE_ARA, STR_LANG_CODE_AR] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return LANG_DIR_RTL }
  static get baseUnit () { return LANG_UNIT_WORD }

  static get typeFeatures () {
    if (!typeFeaturesInitialized$2) { this.initTypeFeatures(); }
    return typeFeatures$2
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures$2.set(featureName, this.getFeature(featureName));
    }
    typeFeaturesInitialized$2 = true;
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * @override LanguageModel#alternateWordEncodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // tanwin (& tatweel) - drop FATHATAN, DAMMATAN, KASRATAN, TATWEEL
    let tanwin = word.replace(/[\u{064B}\u{064C}\u{064D}\u{0640}]/ug, '');
    // hamzas - replace ALEF WITH MADDA ABOVE, ALEF WITH HAMZA ABOVE/BELOW with ALEF
    let hamza = tanwin.replace(/[\u{0622}\u{0623}\u{0625}]/ug, '\u{0627}');
    // harakat - drop FATHA, DAMMA, KASRA, SUPERSCRIPT ALEF, ALEF WASLA
    let harakat = hamza.replace(/[\u{064E}\u{064F}\u{0650}\u{0670}\u{0671}]/ug, '');
    // shadda
    let shadda = harakat.replace(/\u{0651}/ug, '');
    // sukun
    let sukun = shadda.replace(/\u{0652}/ug, '');
    // alef
    let alef = sukun.replace(/\u{0627}/ug, '');
    let alternates = new Map([
      ['tanwin', tanwin],
      ['hamza', hamza],
      ['harakat', harakat],
      ['shadda', shadda],
      ['sukun', sukun],
      ['alef', alef]
    ]);
    if (encoding !== null && alternates.has(encoding)) {
      return [alternates.get(encoding)]
    } else {
      return Array.from(alternates.values())
    }
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }
}

let typeFeatures$3 = new Map();
let typeFeaturesInitialized$3 = false;

/**
 * @class  PersianLanguageModel is the lass for Persian specific behavior
 */
class PersianLanguageModel extends LanguageModel {
  static get languageID () { return LANG_PERSIAN }

  static get languageCode () { return STR_LANG_CODE_PER }

  static get languageCodes () { return [STR_LANG_CODE_PER, STR_LANG_CODE_FAS, STR_LANG_CODE_FA, STR_LANG_CODE_FA_IR] }

  static get contextForward () { return 0 }

  static get contextBackward () { return 0 }

  static get direction () { return LANG_DIR_RTL }

  static get baseUnit () { return LANG_UNIT_WORD }

  static get typeFeatures () {
    if (!typeFeaturesInitialized$3) { this.initTypeFeatures(); }
    return typeFeatures$3
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures$3.set(featureName, this.getFeature(featureName));
    }
    typeFeaturesInitialized$3 = true;
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // Not implemented yet
    return []
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }
}

const MODELS = new Map([
  [ STR_LANG_CODE_LA, LatinLanguageModel ],
  [ STR_LANG_CODE_LAT, LatinLanguageModel ],
  [ STR_LANG_CODE_GRC, GreekLanguageModel ],
  [ STR_LANG_CODE_ARA, ArabicLanguageModel ],
  [ STR_LANG_CODE_AR, ArabicLanguageModel ],
  [ STR_LANG_CODE_PER, PersianLanguageModel ]
]);

class LanguageModelFactory {
  /**
   * Checks whether a language is supported
   * @param {string | symbol} language - Language as a language ID (symbol) or a language code (string)
   * @return {boolean} True if language is supported, false otherwise
   */
  static supportsLanguage (language) {
    language = (typeof language === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(language) : language;
    return MODELS.has(language)
  }

  /**
   * Returns a constructor of language model for a specific language ID.
   * @param {symbol} languageID - A language ID of a desired language model.
   * @return {LanguageModel} A language model for a given language ID.
   */
  static getLanguageModel (languageID) {
    let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID);
    if (MODELS.has(languageCode)) {
      return MODELS.get(languageCode)
    } else {
      // A default value
      return LanguageModel
    }
  }

  static getLanguageForCode (code = null) {
    let Model = MODELS.get(code);
    if (Model) {
      return new Model()
    }
    // for now return a default Model
    // TODO may want to throw an error
    return new LanguageModel()
  }

  /**
   * Converts an ISO 639-3 language code to a language ID
   * @param {string} languageCode - An ISO 639-3 language code
   * @return {symbol | undefined} A language ID or undefined if language ID is not found
   */
  static getLanguageIdFromCode (languageCode) {
    for (const languageModel of MODELS.values()) {
      if (languageModel.hasCode(languageCode)) {
        return languageModel.languageID
      }
    }
    // Noting found, return a Symbol with an undefined value (to keep return value type the same)
    return LANG_UNDEFINED
  }

  /**
   * Converts a language ID to an default ISO 639-3 language code for that language
   * @param {symbol} languageID - A language ID
   * @return {string | undefined} An ISO 639-3 language code or undefined if language code is not found
   */
  static getLanguageCodeFromId (languageID) {
    for (const languageModel of MODELS.values()) {
      if (languageModel.languageID === languageID) {
        return languageModel.languageCode
      }
    }
    // Noting found, return a string with an undefined value (to keep return value type the same)
    return STR_LANG_CODE_UNDEFINED
  }

  /**
   * Takes either a language ID or a language code and returns an object with both an ID and a code.
   * @param {string | symbol} language - Either a language ID (a Symbol) or a language code (a String).
   * @return {object} An object with the following properties:
   *    {symbol} languageID
   *    {string} languageCode
   */
  static getLanguageAttrs (language) {
    if (typeof language === 'symbol') {
      // `language` is a language ID
      return {
        languageID: language,
        languageCode: LanguageModelFactory.getLanguageCodeFromId(language)
      }
    } else {
      // `language` is a language code
      return {
        languageID: LanguageModelFactory.getLanguageIdFromCode(language),
        languageCode: language
      }
    }
  }

  /**
   * Compares two languages in either a language ID or a language code format. For this, does conversion of
   * language IDs to language code. Because fo this, it will work even for language IDs defined in
   * different modules
   * @param {string | symbol} languageA - Either a language ID (a symbol) or a language code (a string).
   * @param {string | symbol} languageB - Either a language ID (a symbol) or a language code (a string).
   * @return {boolean} True if languages are the same, false otherwise.
   */
  static compareLanguages (languageA, languageB) {
    languageA = (typeof languageA === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(languageA) : languageA;
    languageB = (typeof languageB === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(languageB) : languageB;
    return languageA === languageB
  }
}

/**
 * This is a temporary placeholder for an i18n library
 */
const i18n = {
  en: {
    feminine: {
      full: 'feminine',
      abbr: 'f'
    },
    masculine: {
      full: 'masculine',
      abbr: 'm'
    },
    neuter: {
      full: 'neuter',
      abbr: 'n'
    }
  }
};

/**
 * A grammatical feature object, that can replace both Feature and FeatureType objects.
 */
class Feature {
  /**
   *
   * @param {string} type - A type of the feature, allowed values are specified in 'type' getter.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations.
   *
   * If a single value with no sort order is provided, data format will be:
   *  value
   *  This value will be assigned a default sort order.
   *
   * If a single value with sort order is provided, data format will be:
   *  [[value, sortOrder]]
   *
   * If multiple values without sort order are provided, data format will be:
   *  [value1, value2, value3, ...]
   * Items will be assigned a sort order according to their order in an array, starting from one.
   *
   * If multiple values with sort order are provided, data format will be:
   *  [[value1, sortOrder1], [value2, sortOrder2], [value3, sortOrder3], ...]
   * If a sort order is omitted anywhere, it will be set to a default sort order.
   *
   * Each value of a feature has its `sortOrder` property. This value is used to soft values of a feature
   * between themselves. Feature object has a `sortOrder` property of its own, too. It is used
   * to compare two Feature objects between themselves.
   *
   * @param {symbol} languageID - A language ID of a feature
   * @param {number} sortOrder - A sort order of a feature when multiple features are compared.
   * @param allowedValues - If feature has a restricted set of allowed values, here will be a list of those
   * values. An order of those values can define a sort order.
   */
  constructor (type, data, languageID, sortOrder = 1, allowedValues = []) {
    if (!Feature.isAllowedType(type)) {
      throw new Error('Features of "' + type + '" type are not supported.')
    }
    if (!data) {
      throw new Error('Feature should have a non-empty value(s).')
    }
    if (!languageID) {
      throw new Error('No language ID is provided')
    }

    this.type = type;
    this.languageID = languageID;
    this.sortOrder = sortOrder;
    this.allowedValues = allowedValues;

    // `_data` is an array
    this._data = Feature.dataValuesFromInput(data);
    this.sort();
  }

  static dataValuesFromInput (data) {
    let normalized;
    if (!Array.isArray(data)) {
      // Single value with no sort order
      normalized = [[data, this.defaultSortOrder]];
    } else if (!Array.isArray(data[0])) {
      // Multiple values without sort order
      normalized = data.map((v, i) => [v, i + 1]);
    } else {
      normalized = data;
    }
    return normalized.map(d => { return { value: d[0], sortOrder: Number.parseInt(d[1]) } })
  }

  /**
   *
   * @param featureData
   */
  static newFromFtr (featureData) {

  }

  static get types () {
    return {
      /**
       * @deprecated : Use `fullForm` where appropriate instead
       */
      word: 'word',
      fullForm: 'full form',
      hdwd: 'headword',
      part: 'part of speech', // Part of speech
      number: 'number',
      'case': 'case',
      grmCase: 'case', // A synonym of `case`
      declension: 'declension',
      gender: 'gender',
      type: 'type',
      'class': 'class',
      grmClass: 'class', // A synonym of `class`
      conjugation: 'conjugation',
      comparison: 'comparison',
      tense: 'tense',
      voice: 'voice',
      mood: 'mood',
      person: 'person',
      frequency: 'frequency', // How frequent this word is
      meaning: 'meaning', // Meaning of a word
      source: 'source', // Source of word definition
      footnote: 'footnote', // A footnote for a word's ending
      dialect: 'dialect', // a dialect identifier
      note: 'note', // a general note
      pronunciation: 'pronunciation',
      age: 'age',
      area: 'area',
      geo: 'geo', // geographical data
      kind: 'kind', // verb kind information
      derivtype: 'derivtype',
      stemtype: 'stemtype',
      morph: 'morph', // general morphological information
      var: 'var' // variance?
    }
  }

  static isAllowedType (value) {
    return Object.values(this.types).includes(`${value}`)
  }

  static get defaultSortOrder () {
    return 1
  }

  static get joinSeparator () {
    return ' '
  }

  static get defaultImporterName () {
    return 'default'
  }

  /**
   * Test to see if this feature allows unrestricted values.
   * @returns {boolean} true if unrestricted false if not.
   */
  get allowsUnrestrictedValues () {
    /*
    If `allowedValues` array is empty then there are no value restrictions
     */
    return this.allowedValues.length === 0
  }

  /**
   * Defines a sort order of feature values. Values are sorted according to their sort order
   * (a number starting from one). If several values have the same sort order, they will be
   * sorted alphabetically according to their values.
   * Sort order is deterministic.
   */
  sort () {
    this._data.sort((a, b) => a.sortOrder !== b.sortOrder ? a.sortOrder - b.sortOrder : a.value.localeCompare(b.value));
  }

  get items () {
    return this._data
  }

  /**
   * Returns a single value string. If feature has a single value, this value will be returned.
   * If it has multiple values, those values will be concatenated with a default separator and
   * returned in a single string. Values composing this string are sorted according
   * to each value's sort order.
   * @return {string} A single value string.
   */
  get value () {
    return this.values.join(this.constructor.joinSeparator)
  }

  /**
   * Returns an array of string values of a feature, sorted according to each item's sort order.
   * If a feature contains a single feature, an array with one value will be returned.
   * @return {string[]} An array of string values.
   */
  get values () {
    return this._data.map(v => v.value)
  }

  /**
   * Retrieves a value object by name. Can be used to update a value object directly.
   * @param {string} featureVale - A feature value of an object to retrieve.
   */
  getValue (featureVale) {
    return this._data.find(v => v.value === featureVale)
  }

  /**
   * Returns a number of feature values.
   * @retrun {number] A quantity of feature values
   */
  get valQty () {
    return this._data.length
  }

  get isEmpty () {
    return this.valQty === 0
  }

  get isSingle () {
    return this.valQty === 1
  }

  get isMultiple () {
    return this.valQty > 1
  }

  /**
   * A string representation of a feature.
   * @return {string}
   */
  toString () {
    return this.value
  }

  /**
   * Examines the feature for a specific value.
   * @param {string} value
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasValue (value) {
    return this.values.includes(value)
  }

  /**
   * Checks if this feature has all value from an array.
   * @param {string[]} values - An array of values to check for.
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasValues (values) {
    let hasValues = true;
    for (let value of values) {
      hasValues = hasValues && this.hasValue(value);
    }
    return hasValues
  }

  /**
   * Checks if this feature has some value from an array.
   * @param {string[]} values - An array of values to check for.
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasSomeValues (values) {
    let hasValues = false;
    for (let value of values) {
      hasValues = hasValues || this.hasValue(value);
    }
    return hasValues
  }

  get valuesUnrestricted () {
    return this.allowedValues.length === 0
  }

  /**
   * Two features are considered fully equal if they are of the same type, have the same language,
   * and the same set of feature values in the same order.
   * @param {Feature} feature - A GrmFtr object this feature should be compared with.
   * @return {boolean} True if features are equal, false otherwise.
   */
  isEqual (feature) {
    return this.type === feature.type &&
      LanguageModelFactory.compareLanguages(this.languageID, feature.languageID) &&
      this.value === feature.value
  }

  /**
   * Adds a single new value to the existing feature object.
   * This function is chainable.
   * @param {string} value - A feature value.
   * @param {number} sortOrder - A sort order.
   * @return {Feature} - Self reference for chaining.
   */
  addValue (value, sortOrder = this.constructor.defaultSortOrder) {
    if (!this.hasValue(value)) {
      this._data.push({
        value: value,
        sortOrder: sortOrder
      });
      this.sort(); // Resort an array to place an inserted value to the proper place
    } else {
      console.warn(`Value "${value} already exists. If you want to change it, use "getValue" to access it directly.`);
    }
    return this
  }

  /**
   * Adds multiple new values to the existing feature object.
   * This function is chainable.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations.
   * @return {Feature} - Self reference for chaining.
   */
  addValues (data) {
    let normalizedData = this.constructor.dataValuesFromInput(data);
    let values = normalizedData.map(v => v.value);
    if (!this.hasValue(values)) {
      this._data = this._data.concat(normalizedData);
      this.sort(); // Resort an array to place an inserted value to the proper place
    } else {
      console.warn(`One or several values from "${values} already exist. If you want to change it, use "getValue" to access a value directly.`);
    }
    return this
  }

  /**
   * Removes a single value from the existing feature object.
   * @param value
   */
  removeValue (value) {
    // TODO: Do we need it?
    console.warn(`This feature is not implemented yet`);
  }

  /**
   * Creates a new single value Feature object of the same type and same language,
   * but with a different feature value.
   * This can be used when one feature defines a type and it is necessary
   * to create other items of the same type.
   * @param {string} value - A value of a feature.
   * @param {number} sortOrder.
   * @return {Feature} A new Ftr object.
   */
  createFeature (value, sortOrder = this.constructor.defaultSortOrder) {
    // TODO: Add a check of if the value exists in a source Feature object
    return new Feature(this.type, [[value, sortOrder]], this.languageID, this.sortOrder, this.allowedValues)
  }

  /**
   * Creates a multiple value Feature object of the same type and same language,
   * but with a different feature values.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations,
   * formatted according to rules described in a Ftr constructor.
   * @return {Feature} A new Ftr object.
   */
  createFeatures (data) {
    return new Feature(this.type, data, this.languageID, this.sortOrder, this.allowedValues)
  }

  /**
   * Create a copy of the feature object.
   */
  getCopy () {
    let values = this._data.map(item => [item.value, item.sortOrder]);
    return new Feature(this.type, values, this.languageID, this.sortOrder, this.allowedValues.slice())
  }

  /**
   * A locale-specific abbreviation for a feature's values.
   * @return {string[]}
   */
  toLocaleStringAbbr (lang = 'en') {
    // TODO: Should it return a string instead of array? This function is used in morph.vue.
    return this.values.map(v => i18n[lang][v].abbr)
  }

  /**
   * Adds an importer to the internal list.
   * @param {string} name - A name of an importer.
   * @param {FeatureImporter} importer - A `FeatureImporter` object.
   */
  addImporter (importer = new FeatureImporter(), name = this.constructor.defaultImporterName) {
    if (!this.importers) {
      this.importers = new Map();
    }
    this.importers.set(name, importer);
    return importer
  }

  getImporter (name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    return this.importers.get(name)
  }

  /**
   * Adds feature values from the imported values.
   * @param {string | string[]} foreignData - A single value or an array of values from a third-party source.
   * @param {string} name - A name of an importer.
   * @return {Feature} - A new Ftr object.
   */
  addFromImporter (foreignData, name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    const importer = this.importers.get(name);
    foreignData = this.constructor.dataValuesFromInput(foreignData);
    this._data.push(...foreignData.map(fv => { return { value: importer.get(fv.value), sortOrder: fv.sortOrder } }));
    this.sort();
    return this
  }

  /**
   * Creates a new feature of the same type and with the same language from the imported values.
   * @param {string | string[]} foreignData - A single value or an array of values from a third-party source.
   * @param {string} name - A name of an importer.
   * @return {Feature} - A new Ftr object.
   */
  createFromImporter (foreignData, name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    const importer = this.importers.get(name);
    if (!Array.isArray(foreignData)) {
      foreignData = [foreignData];
    }
    const values = foreignData.map(fv => importer.get(fv));
    return new Feature(this.type, values, this.languageID, this.sortOrder, this.allowedValues)
  }
}

/**
 * Lemma, a canonical form of a word.
 */
class Lemma {
  /**
   * Initializes a Lemma object.
   * @param {string} word - A word.
   * @param {symbol | string} languageID - A language ID (symbol, please use this) or a language code of a word.
   * @param {string[]} principalParts - the principalParts of a lemma.
   * @param {Object} features - the grammatical features of a lemma.
   */
  constructor (word, languageID, principalParts = [], features = {}) {
    if (!word) {
      throw new Error('Word should not be empty.')
    }

    if (!languageID) {
      throw new Error('Language should not be empty.')
    }

    this.languageID = undefined;
    this.languageCode = undefined
    ;({languageID: this.languageID, languageCode: this.languageCode} = LanguageModelFactory.getLanguageAttrs(languageID));

    this.word = word;
    this.principalParts = principalParts;
    this.features = {};
  }

  get language () {
    console.warn(`Please use "languageID" instead of "language"`);
    return this.languageCode
  }

  static readObject (jsonObject) {
    return new Lemma(jsonObject.word, jsonObject.language, jsonObject.principalParts, jsonObject.pronunciation)
  }

  /**
   * @deprecated Please use `addFeature` instead.
   * Sets a grammatical feature for a lemma. Some features can have multiple values, In this case
   * an array of Feature objects will be provided.
   * Values are taken from features and stored in a 'feature.type' property as an array of values.
   * @param {Feature | Feature[]} data
   */
  set feature (data) {
    console.warn(`Please use "addFeature" instead`);
    if (!data) {
      throw new Error('feature data cannot be empty.')
    }
    if (!Array.isArray(data)) {
      data = [data];
    }

    let type = data[0].type;
    this.features[type] = [];
    for (let element of data) {
      if (!(element instanceof Feature)) {
        throw new Error('feature data must be a Feature object.')
      }

      if (!LanguageModelFactory.compareLanguages(element.languageID, this.languageID)) {
        throw new Error('Language "' + element.languageID.toString() + '" of a feature does not match a language "' +
                this.languageID.toString() + '" of a Lemma object.')
      }

      this.features[type].push(element);
    }
  }

  /**
   * Sets a grammatical feature of a lemma. Feature is stored in a `feature.type` property.
   * @param {Feature} feature - A feature object with one or multiple values.
   */
  addFeature (feature) {
    if (!feature) {
      throw new Error('feature data cannot be empty.')
    }

    if (!(feature instanceof Feature)) {
      throw new Error('feature data must be a Feature object.')
    }

    if (!LanguageModelFactory.compareLanguages(feature.languageID, this.languageID)) {
      throw new Error('Language "' + feature.languageID.toString() + '" of a feature does not match a language "' +
        this.languageID.toString() + '" of a Lemma object.')
    }

    this.features[feature.type] = feature;
  }

  /**
   * Sets multiple grammatical features of a lemma.
   * @param {Feature[]} features - Features to be added.
   */
  addFeatures (features) {
    if (!Array.isArray(features)) {
      throw new Error(`Features must be in an array`)
    }

    for (let feature of features) {
      this.addFeature(feature);
    }
  }

  /**
   * Get a string which can be used as a unique key to identify this lemma
   * @return {string} the key
   */
  get key () {
    return [this.word, LanguageModelFactory.getLanguageCodeFromId(this.languageID), ...Object.values(this.features)].join('-')
  }
}

/*
 Hierarchical structure of return value of a morphological analyzer:

 Homonym (a group of words that are written the same way, https://en.wikipedia.org/wiki/Homonym)
    Lexeme 1 (a unit of lexical meaning, https://en.wikipedia.org/wiki/Lexeme)
        Have a lemma and one or more inflections
        Lemma (also called a headword, a canonical form of a group of words https://en.wikipedia.org/wiki/Lemma_(morphology) )
        Inflection 1
            Stem
            Suffix (also called ending)
        Inflection 2
            Stem
            Suffix
    Lexeme 2
        Lemma
        Inflection 1
            Stem
            Suffix
 */

/**
 * Represents an inflection of a word
 */
class Inflection {
  /**
     * Initializes an Inflection object.
     * @param {string} stem - A stem of a word.
     * @param {string | symbol} language - A word's language.
     * @param {string} suffix - a suffix of a word
     * @param {prefix} prefix - a prefix of a word
     * @param {example} example - example
     */
  constructor (stem, language, suffix = null, prefix = null, example = null) {
    if (!stem) {
      throw new Error('Stem should not be empty.')
    }

    if (!language) {
      throw new Error('Language should not be empty.')
    }

    if (!LanguageModelFactory.supportsLanguage(language)) {
      throw new Error(`language ${language} not supported.`)
    }

    this.stem = stem;
    this.languageID = undefined;
    this.languageCode = undefined
    ;({languageID: this.languageID, languageCode: this.languageCode} = LanguageModelFactory.getLanguageAttrs(language));
    this.model = LanguageModelFactory.getLanguageModel(this.languageID);

    // A grammar constraints object
    this.constraints = {
      fullFormBased: false, // True this inflection stores and requires to use a full form of a word
      suffixBased: false, // True if only suffix is enough to identify this inflection
      obligatoryMatches: [], // Names of features that should be matched in order to include a form or suffix to an inflection table
      optionalMatches: [] // Names of features that will be recorded but are not important for inclusion of a form or suffix to an inflection table
    };

    // Suffix may not be present in every word. If missing, it will be set to null.
    this.suffix = suffix;

    // Prefix may not be present in every word. If missing, it will be set to null.
    this.prefix = prefix;

    // Example may not be provided
    this.example = example;
  }

  get form () {
    let form = this.prefix ? this.prefix : '';
    form = form + this.stem;
    form = this.suffix ? form + this.suffix : form;
    return form
  }

  /**
   * This is a compatibility function for legacy code.
   * @return {String} A language code.
   */
  get language () {
    console.warn(`Please use a "languageID" instead of a "language"`);
    return this.languageCode
  }

  /**
   * Sets grammar properties based on inflection info
   */
  setConstraints () {
    if (this.model.hasOwnProperty('getInflectionConstraints')) {
      let constraintData = this.model.getInflectionConstraints(this);
      this.constraints = Object.assign(this.constraints, constraintData);
    }
  }

  compareWithWord (word, normalize = true) {
    const model = LanguageModelFactory.getLanguageModel(this.languageID);
    const value = this.constraints.suffixBased ? this.suffix : this.form;
    return normalize
      ? model.normalizeWord(value) === model.normalizeWord(word)
      : value === word
  }

  static readObject (jsonObject) {
    let inflection =
      new Inflection(
        jsonObject.stem, jsonObject.languageCode, jsonObject.suffix, jsonObject.prefix, jsonObject.example);
    inflection.languageID = LanguageModelFactory.getLanguageIdFromCode(inflection.languageCode);
    return inflection
  }

  /**
   * @deprecated Use `addFeature` instead
   * Sets a grammatical feature in an inflection. Some features can have multiple values, In this case
   * an array of Feature objects will be provided.
   * Values are taken from features and stored in a 'feature.type' property as an array of values.
   * @param {Feature | Feature[]} data
   */
  set feature (data) {
    console.warn(`Please use "addFeature" instead.`);
    if (!data) {
      throw new Error('Inflection feature data cannot be empty.')
    }
    if (!Array.isArray(data)) {
      data = [data];
    }

    let type = data[0].type;
    this[type] = [];
    for (let element of data) {
      if (!(element instanceof Feature)) {
        throw new Error('Inflection feature data must be a Feature object.')
      }

      if (!LanguageModelFactory.compareLanguages(element.languageID, this.languageID)) {
        throw new Error(`Language "${element.languageID.toString()}" of a feature does not match 
          a language "${this.languageID.toString()}" of an Inflection object.`)
      }

      this[type].push(element);
    }
  }

  /**
   * Sets a grammatical feature of an inflection. Feature is stored in a `feature.type` property.
   * @param {Feature} feature - A feature object with one or multiple values.
   */
  addFeature (feature) {
    if (!feature) {
      throw new Error('feature data cannot be empty.')
    }

    if (!(feature instanceof Feature)) {
      throw new Error('feature data must be a Feature object.')
    }

    if (!LanguageModelFactory.compareLanguages(feature.languageID, this.languageID)) {
      throw new Error('Language "' + feature.languageID.toString() + '" of a feature does not match a language "' +
        this.languageID.toString() + '" of a Lemma object.')
    }

    this[feature.type] = feature;
  }

  /**
   * Sets multiple grammatical features of an inflection.
   * @param {Feature[]} features - Features to be added.
   */
  addFeatures (features) {
    if (!Array.isArray(features)) {
      throw new Error(`Features must be in an array`)
    }

    for (let feature of features) {
      this.addFeature(feature);
    }
  }

  /**
   * Checks whether an inflection has a feature with `featureName` name and `featureValue` value
   * @param {string} featureName - A name of a feature
   * @param {string} featureValue - A value of a feature
   * @return {boolean} True if an inflection contains a feature, false otherwise
   */
  hasFeatureValue (featureName, featureValue) {
    if (this.hasOwnProperty(featureName)) {
      return this[featureName].values.includes(featureValue)
    }
    return false
  }
}

/**
 * A basic unit of lexical meaning. Contains a primary Lemma object, one or more Inflection objects
 * and a DefinitionSet
 */
class Lexeme {
  /**
   * Initializes a Lexeme object.
   * @param {Lemma} lemma - A lemma object.
   * @param {Inflection[]} inflections - An array of inflections.
   * @param {DefinitionSet} meaning - A set of definitions.

   */
  constructor (lemma, inflections, meaning = null) {
    if (!lemma) {
      throw new Error('Lemma should not be empty.')
    }

    if (!(lemma instanceof Lemma)) {
      throw new Error('Lemma should be of Lemma object type.')
    }

    if (!inflections) {
      throw new Error('Inflections data should not be empty.')
    }

    if (!Array.isArray(inflections)) {
      throw new Error('Inflection data should be provided in an array.')
    }

    for (let inflection of inflections) {
      if (!(inflection instanceof Inflection)) {
        throw new Error('All inflection data should be of Inflection object type.')
      }
    }

    this.lemma = lemma;
    this.inflections = inflections;
    this.meaning = meaning || new DefinitionSet(this.lemma.word, this.lemma.languageID);
  }

  /**
   * test to see if a lexeme is populated with meaningful data
   * Returns true if any of these are true:
   *   its lemma has morphological features defined
   *   it has one ore more definitions supplied in the meaning
   *   it has one ore more inflections
   * @return {boolean}
   */
  isPopulated () {
    return Object.entries(this.lemma.features).length > 0 ||
      !this.meaning.isEmpty() ||
      this.inflections.length > 0
  }

  getGroupedInflections () {
    let lm = LanguageModelFactory.getLanguageModel(this.lemma.languageID);
    return lm.groupInflectionsForDisplay(this.inflections)
  }

  static readObject (jsonObject) {
    let lemma = Lemma.readObject(jsonObject.lemma);
    let inflections = [];
    for (let inflection of jsonObject.inflections) {
      inflections.push(Inflection.readObject(inflection));
    }

    let lexeme = new Lexeme(lemma, inflections);
    lexeme.meaning = DefinitionSet.readObject(jsonObject.meaning);
    return lexeme
  }

  /**
   * Get a sort function for an array of lexemes which applies a primary and secondary
   * sort logic using the sort order specified for each feature. Sorts in descending order -
   * higher sort order means it should come first
   * @param {string} primary feature name to use as primary sort key
   * @param {string} secondary feature name to use as secondary sort key
   * @returns {Function} function which can be passed to Array.sort
   */
  static getSortByTwoLemmaFeatures (primary, secondary) {
    return (a, b) => {
      if (a.lemma.features[primary] && b.lemma.features[primary]) {
        if (a.lemma.features[primary].sortOrder < b.lemma.features[primary].sortOrder) {
          return 1
        } else if (a.lemma.features[primary].sortOrder > b.lemma.features[primary].sortOrder) {
          return -1
        } else if (a.lemma.features[secondary] && b.lemma.features[secondary]) {
          if (a.lemma.features[secondary].sortOrder < b.lemma.features[secondary].sortOrder) {
            return 1
          } else if (a.lemma.features[secondary].sortOrder > b.lemma.features[secondary].sortOrder) {
            return -1
          } else if (a.lemma.features[secondary] && !b.lemma.features[secondary]) {
            return -1
          } else if (!a.lemma.features[secondary] && b.lemma.features[secondary]) {
            return 1
          } else {
            return 0
          }
        }
      } else if (a.lemma.features[primary] && !b.lemma.features[primary]) {
        return -1
      } else if (!a.lemma.features[primary] && b.lemma.features[primary]) {
        return 1
      } else {
        return 0
      }
    }
  }
}

class Homonym {
  /**
   * Initializes a Homonym object.
   * @param {Lexeme[]} lexemes - An array of Lexeme objects.
   * @param {string} form - the form which produces the homonyms
   */
  constructor (lexemes, form) {
    if (!lexemes) {
      throw new Error('Lexemes data should not be empty.')
    }

    if (!Array.isArray(lexemes)) {
      throw new Error('Lexeme data should be provided in an array.')
    }

    for (let lexeme of lexemes) {
      if (!(lexeme instanceof Lexeme)) {
        throw new Error('All lexeme data should be of Lexeme object type.')
      }
    }

    this.lexemes = lexemes;
    this.targetWord = form;
  }

  static readObject (jsonObject) {
    let lexemes = [];
    if (jsonObject.lexemes) {
      for (let lexeme of jsonObject.lexemes) {
        lexemes.push(Lexeme.readObject(lexeme));
      }
    }
    let homonym = new Homonym(lexemes);
    if (jsonObject.targetWord) {
      homonym.targetWord = jsonObject.targetWord;
    }
    return homonym
  }

  /**
   * Returns a language code of a homonym (ISO 639-3).
   * Homonym does not have a language property, only lemmas and inflections do. We assume that all lemmas
   * and inflections within the same homonym will have the same language, and we can determine a language
   * by using language property of the first lemma. We chan change this logic in the future if we'll need to.
   * @returns {string} A language code, as defined in the `languages` object.
   */
  get language () {
    console.warn(`Please use languageID instead`);
    return LanguageModelFactory.getLanguageCodeFromId(this.languageID)
  }

  /**
   * Returns a language ID of a homonym.
   * Homonym does not have a languageID property, only lemmas and inflections do. We assume that all lemmas
   * and inflections within the same homonym will have the same language, and we can determine a language
   * by using languageID property of the first lemma. We chan change this logic in the future if we'll need to.
   * @returns {Symbol} A language ID, as defined in the `LANG_` constants.
   */
  get languageID () {
    if (this.lexemes && this.lexemes[0] && this.lexemes[0].lemma && this.lexemes[0].lemma.languageID) {
      return this.lexemes[0].lemma.languageID
    } else {
      throw new Error('Homonym has not been initialized properly. Unable to obtain language ID information.')
    }
  }

  /**
   * Returns a list of all inflections within all lexemes of a homonym
   * @return {Inflection[]} An array of inflections
   */
  get inflections () {
    let inflections = [];
    for (const lexeme of this.lexemes) {
      inflections = inflections.concat(lexeme.inflections);
    }
    return inflections
  }
}

/**
 * An abstraction of an Alpheios resource provider
 */
class ResourceProvider {
  /**
   * @constructor
   * @param {string} uri - a unique resource identifier for this provider
   * @param {string} rights - rights text
   * @param {Map} rightsTranslations - optional map of translated rights text - keys should be language of text, values the text
   */
  constructor (uri = '', rights = '', rightsTranslations = new Map([['default', rights]])) {
    this.uri = uri;
    this.rights = rightsTranslations;
    if (!this.rights.has('default')) {
      this.rights.set('default', rights);
    }
  }

  /**
   * @return a string representation of the resource provider, in the default language
   */
  toString () {
    return this.rights.get('default')
  }

  /**
   * Produce a string representation of the resource provider, in the requested locale if available
   * @param {string} languageCode
   * @return a string representation of the resource provider, in the requested locale if available
   */
  toLocaleString (languageCode) {
    return this.rights.get(languageCode) || this.rights.get('default')
  }

  static getProxy (provider = null, target = {}) {
    return new Proxy(target, {
      get: function (target, name) {
        return name === 'provider' ? provider : target[name]
      }
    })
  }
}

/*
Objects of a morphology analyzer's library
 */
/**
 * Holds all information required to transform from morphological analyzer's grammatical feature values to the
 * library standards. There is one ImportData object per language.
 */
class ImportData {
  /**
     * Creates an ImportData object for the language provided.
     * @param {Function<LanguageModel>} model - A language model of the import data.
     * @param {string} engine - engine code
     */
  constructor (model, engine) {
    'use strict';
    this.model = model;
    this.engine = engine;
    // add all the features that the language supports so that we
    // can return the default values if we don't need to import a mapping
    for (let featureName of Object.keys(this.model.features)) {
      this.addFeature(featureName);
    }
    // may be overridden by specific engine use via setLemmaParser
    this.parseLemma = function (lemma) { return new Lemma(lemma, this.model.languageID) };
    // may be overridden by specific engine use via setPropertyParser - default just returns the property value
    // as a list
    this.parseProperty = function (propertyName, propertyValue) {
      let propertyValues = [];
      if (propertyName === 'decl') {
        propertyValues = propertyValue.split('&').map((p) => p.trim());
      } else if (propertyName === 'comp' && propertyValue === 'positive') {
        propertyValues = [];
      } else {
        propertyValues = [propertyValue];
      }
      return propertyValues
    };
    // may be overridden by specifc engine use via setLexemeFilter - default assumes we will have a part of speech
    this.reportLexeme = function (lexeme) {
      return lexeme.lemma.features[Feature.types.part]
    };
  }

  /**
     * Adds a grammatical feature whose values to be mapped.
     * @param {string} featureName - A name of a grammatical feature (i.e. declension, number, etc.)
     * @return {Object} An object that represent a newly created grammatical feature.
     */
  addFeature (featureName) {
    this[featureName] = {};
    let model = this.model;

    this[featureName].add = function add (providerValue, alpheiosValue) {
      this[providerValue] = alpheiosValue;
      return this
    };

    this[featureName].get = function get (providerValue, sortOrder = 1, allowUnknownValues = false) {
      let mappedValue = [];
      if (!this.importer.has(providerValue)) {
        // if the providerValue matches the model value or the model value
        // is unrestricted, return a feature with the providerValue and order
        if (model.typeFeature(featureName).hasValue(providerValue) ||
            model.typeFeature(featureName).valuesUnrestricted) {
          mappedValue = model.typeFeature(featureName).createFeature(providerValue, sortOrder);
        } else {
          let message = `Unknown value "${providerValue}" of feature "${featureName}" for ${model.languageCode} (allowed = ${allowUnknownValues})`;
          if (allowUnknownValues) {
            console.log(message);
            mappedValue = model.typeFeature(featureName).createFeature(providerValue, sortOrder);
          } else {
            throw new Error(message)
          }
        }
      } else {
        let tempValue = this.importer.get(providerValue);
        if (Array.isArray(tempValue)) {
          mappedValue = model.typeFeature(featureName).createFeatures(tempValue, sortOrder);
        } else {
          mappedValue = model.typeFeature(featureName).createFeature(tempValue, sortOrder);
        }
      }
      return mappedValue
    };

    /**
     * @param {Object[]} data - An array of objects with `providerData` (an item value) and `sortOrder` fields
     * @param allowUnknownValues
     * @return {Feature}
     */
    this[featureName].getMultiple = function get (data, allowUnknownValues = false) {
      let values = []; // Converts values from `data` into `values` array
      for (const item of data) {
        if (this.importer.has(item.providerValue)) {
          let value = this.importer.get(item.providerValue);
          if (Array.isArray(value)) {
            // if the import returns an array, it should already have the sortOrder
            values = value;
          } else {
            values = [value, item.sortOrder];
          }
        } else if (model.typeFeature(featureName).hasValue(item.providerValue) ||
          model.typeFeature(featureName).valuesUnrestricted) {
          values.push([item.providerValue, item.sortOrder]);
        } else {
          let message = `Unknown value "${item.providerValue}" of feature "${featureName}" for ${model.languageCode} (allowed = ${allowUnknownValues})`;
          if (allowUnknownValues) {
            console.log(message);
            values.push([item.providerValue, item.sortOrder]);
          } else {
            throw new Error(message)
          }
        }
      }
      return model.typeFeature(featureName).createFeatures(values)
    };

    this[featureName].importer = new FeatureImporter();

    return this[featureName]
  }

  /**
   * Add an engine-specific lemma parser
   */
  setLemmaParser (callback) {
    this.parseLemma = callback;
  }

  /**
   * Add an engine-specific property parser
   */
  setPropertyParser (callback) {
    this.parseProperty = callback;
  }

  /**
   * Add an engine-specific lexeme filter
   */
  setLexemeFilter (callback) {
    this.reportLexeme = callback;
  }

  /**
   * Maps property of a single feature type to a single Feature object with one or more values
   * (if this feature has multiple values). Feature is stored as a property of the supplied model object.
   * @param {object} model the model object to which the feature will be added
   * @param {object} inputElem the input data element
   * @param {object} inputName the  property name in the input data
   * @param {string} featureName the name of the feature it will be mapped to
   * @param {boolean} allowUnknownValues flag to indicate if unknown values are allowed
   */
  mapFeature (model, inputElem, inputName, featureName, allowUnknownValues) {
    let values = [];
    let inputItem = inputElem[inputName];
    if (inputItem) {
      if (Array.isArray(inputItem)) {
        // There are multiple values of this feature
        for (let e of inputItem) {
          values.push(...this.parseProperty(inputName, e.$));
        }
      } else {
        values = this.parseProperty(inputName, inputItem.$);
      }
      // `values` is always an array as an array is a return value of `parseProperty`
    }
    if (values.length > 0) {
      // There are some values found
      values = values.map(v => { return { providerValue: v, sortOrder: inputItem.order ? inputItem.order : 1 } });
      let feature = this[Feature.types[featureName]].getMultiple(values, allowUnknownValues);
      model.addFeature(feature);
    }
  }
}

let data = new ImportData(LatinLanguageModel, 'whitakerLat');

/*
Below are value conversion maps for each grammatical feature to be parsed.
Format:
data.addFeature(typeName).add(providerValueName, LibValueName);
(functions are chainable)
Types and values that are unknown (undefined) will be skipped during parsing.
 */

// TODO  - per inflections.xsd
// Whitakers Words uses packon and tackon in POFS, not sure how

data.addFeature(Feature.types.gender).importer
  .map('common', [[constants.GEND_MASCULINE, 1], [constants.GEND_FEMININE, 2]])
  .map('all', [[constants.GEND_MASCULINE, 1], [constants.GEND_FEMININE, 2], [constants.GEND_NEUTER, 3]]);

data.addFeature(Feature.types.tense).importer
  .map('future_perfect', constants.TENSE_FUTURE_PERFECT);

data.setLemmaParser(function (lemma) {
  // Whitaker's Words returns principal parts for some words
  // and sometimes has a space separted stem and suffix
  let parsed, primary;
  let parts = [];
  let lemmas = lemma.split(', ');
  for (let [index, l] of lemmas.entries()) {
    let normalized = l.split(' ')[0];
    if (index === 0) {
      primary = normalized;
    }
    parts.push(normalized);
  }
  if (primary) {
    parsed = new Lemma(primary, this.model.languageCode, parts);
  }

  return parsed
});

let data$1 = new ImportData(GreekLanguageModel, 'morpheusgrc');

/*
Below are value conversion maps for each grammatical feature to be parsed.
Format:
data.addFeature(typeName).add(providerValueName, LibValueName);
(functions are chainable)
Types and values that are unknown (undefined) will be skipped during parsing.
 */

data$1.addFeature(Feature.types.gender).importer
  .map('masculine feminine', [[constants.GEND_MASCULINE, 1], [constants.GEND_FEMININE, 2]]);

data$1.addFeature(Feature.types.declension).importer
  .map('1st & 2nd', [[constants.ORD_1ST, 1], [constants.ORD_2ND, 2]]);

let data$2 = new ImportData(ArabicLanguageModel, 'aramorph');

data$2.addFeature(Feature.types.part).importer
  .map('proper noun', constants.POFS_NOUN);

let data$3 = new ImportData(PersianLanguageModel, 'hazm');

data$3.addFeature(Feature.types.part).importer
  .map('proper noun', constants.POFS_NOUN);

// hazm allow all lemmas in without respect features as all we use it for is lemmatizing
data$3.setLexemeFilter(function (lexeme) { return Boolean(lexeme.lemma.word) });

var Cupidinibus = "{\n  \"RDF\": {\n    \"Annotation\": {\n      \"about\": \"urn:TuftsMorphologyService:cupidinibus:whitakerLat\",\n      \"creator\": {\n        \"Agent\": {\n          \"about\": \"net.alpheios:tools:wordsxml.v1\"\n        }\n      },\n      \"created\": {\n        \"$\": \"2017-08-10T23:15:29.185581\"\n      },\n      \"hasTarget\": {\n        \"Description\": {\n          \"about\": \"urn:word:cupidinibus\"\n        }\n      },\n      \"title\": {},\n      \"hasBody\": [\n        {\n          \"resource\": \"urn:uuid:idm140578094883136\"\n        },\n        {\n          \"resource\": \"urn:uuid:idm140578158026160\"\n        }\n      ],\n      \"Body\": [\n        {\n          \"about\": \"urn:uuid:idm140578094883136\",\n          \"type\": {\n            \"resource\": \"cnt:ContentAsXML\"\n          },\n          \"rest\": {\n            \"entry\": {\n              \"infl\": [\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 2,\n                    \"$\": \"locative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"masculine\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 5,\n                    \"$\": \"dative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"masculine\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"masculine\"\n                  }\n                }\n              ],\n              \"dict\": {\n                \"hdwd\": {\n                  \"lang\": \"lat\",\n                  \"$\": \"Cupido, Cupidinis\"\n                },\n                \"pofs\": {\n                  \"order\": 5,\n                  \"$\": \"noun\"\n                },\n                \"decl\": {\n                  \"$\": \"3rd\"\n                },\n                \"gend\": {\n                  \"$\": \"masculine\"\n                },\n                \"area\": {\n                  \"$\": \"religion\"\n                },\n                \"freq\": {\n                  \"order\": 4,\n                  \"$\": \"common\"\n                },\n                \"src\": {\n                  \"$\": \"Ox.Lat.Dict.\"\n                }\n              },\n              \"mean\": {\n                \"$\": \"Cupid, son of Venus; personification of carnal desire;\"\n              }\n            }\n          }\n        },\n        {\n          \"about\": \"urn:uuid:idm140578158026160\",\n          \"type\": {\n            \"resource\": \"cnt:ContentAsXML\"\n          },\n          \"rest\": {\n            \"entry\": {\n              \"infl\": [\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 2,\n                    \"$\": \"locative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"common\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 5,\n                    \"$\": \"dative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"common\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"cupidin\"\n                    },\n                    \"suff\": {\n                      \"$\": \"ibus\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 5,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"var\": {\n                    \"$\": \"1st\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"num\": {\n                    \"$\": \"plural\"\n                  },\n                  \"gend\": {\n                    \"$\": \"common\"\n                  }\n                }\n              ],\n              \"dict\": {\n                \"hdwd\": {\n                  \"lang\": \"lat\",\n                  \"$\": \"cupido, cupidinis\"\n                },\n                \"pofs\": {\n                  \"order\": 5,\n                  \"$\": \"noun\"\n                },\n                \"decl\": {\n                  \"$\": \"3rd\"\n                },\n                \"gend\": {\n                  \"$\": \"common\"\n                },\n                \"freq\": {\n                  \"order\": 5,\n                  \"$\": \"frequent\"\n                },\n                \"src\": {\n                  \"$\": \"Ox.Lat.Dict.\"\n                }\n              },\n              \"mean\": {\n                \"$\": \"desire/love/wish/longing (passionate); lust; greed, appetite; desire for gain;\"\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n";

var Mare = "{\n  \"RDF\": {\n    \"Annotation\": {\n      \"about\": \"urn:TuftsMorphologyService:mare:morpheuslat\",\n      \"creator\": {\n        \"Agent\": {\n          \"about\": \"org.perseus:tools:morpheus.v1\"\n        }\n      },\n      \"created\": {\n        \"$\": \"2017-09-08T06:59:48.639180\"\n      },\n      \"rights\": {\n        \"$\": \"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"\n      },\n      \"hasTarget\": {\n        \"Description\": {\n          \"about\": \"urn:word:mare\"\n        }\n      },\n      \"title\": {},\n      \"hasBody\": [\n        {\n          \"resource\": \"urn:uuid:idm140446402389888\"\n        },\n        {\n          \"resource\": \"urn:uuid:idm140446402332400\"\n        },\n        {\n          \"resource\": \"urn:uuid:idm140446402303648\"\n        }\n      ],\n      \"Body\": [\n        {\n          \"about\": \"urn:uuid:idm140446402389888\",\n          \"type\": {\n            \"resource\": \"cnt:ContentAsXML\"\n          },\n          \"rest\": {\n            \"entry\": {\n              \"uri\": \"http://data.perseus.org/collections/urn:cite:perseus:latlexent.lex34070.1\",\n              \"dict\": {\n                \"hdwd\": {\n                  \"lang\": \"lat\",\n                  \"$\": \"mare\"\n                },\n                \"pofs\": {\n                  \"order\": 3,\n                  \"$\": \"noun\"\n                },\n                \"decl\": {\n                  \"$\": \"3rd\"\n                },\n                \"gend\": {\n                  \"$\": \"neuter\"\n                }\n              },\n              \"infl\": [\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mar\"\n                    },\n                    \"suff\": {\n                      \"$\": \"e\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 3,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"neuter\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"is_is\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mar\"\n                    },\n                    \"suff\": {\n                      \"$\": \"e\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 3,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 7,\n                    \"$\": \"nominative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"neuter\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"is_is\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mar\"\n                    },\n                    \"suff\": {\n                      \"$\": \"e\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 3,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 1,\n                    \"$\": \"vocative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"neuter\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"is_is\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mar\"\n                    },\n                    \"suff\": {\n                      \"$\": \"e\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 3,\n                    \"$\": \"noun\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 4,\n                    \"$\": \"accusative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"neuter\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"is_is\"\n                  }\n                }\n              ],\n              \"mean\": {\n                \"$\": \"the sea\"\n              }\n            }\n          }\n        },\n        {\n          \"about\": \"urn:uuid:idm140446402332400\",\n          \"type\": {\n            \"resource\": \"cnt:ContentAsXML\"\n          },\n          \"rest\": {\n            \"entry\": {\n              \"uri\": \"http://data.perseus.org/collections/urn:cite:perseus:latlexent.lex34118.1\",\n              \"dict\": {\n                \"hdwd\": {\n                  \"lang\": \"lat\",\n                  \"$\": \"marum\"\n                },\n                \"pofs\": {\n                  \"order\": 3,\n                  \"$\": \"noun\"\n                },\n                \"decl\": {\n                  \"$\": \"2nd\"\n                },\n                \"gend\": {\n                  \"$\": \"neuter\"\n                }\n              },\n              \"infl\": {\n                \"term\": {\n                  \"lang\": \"lat\",\n                  \"stem\": {\n                    \"$\": \"mar\"\n                  },\n                  \"suff\": {\n                    \"$\": \"e\"\n                  }\n                },\n                \"pofs\": {\n                  \"order\": 3,\n                  \"$\": \"noun\"\n                },\n                \"decl\": {\n                  \"$\": \"2nd\"\n                },\n                \"case\": {\n                  \"order\": 1,\n                  \"$\": \"vocative\"\n                },\n                \"gend\": {\n                  \"$\": \"neuter\"\n                },\n                \"num\": {\n                  \"$\": \"singular\"\n                },\n                \"stemtype\": {\n                  \"$\": \"us_i\"\n                }\n              }\n            }\n          }\n        },\n        {\n          \"about\": \"urn:uuid:idm140446402303648\",\n          \"type\": {\n            \"resource\": \"cnt:ContentAsXML\"\n          },\n          \"rest\": {\n            \"entry\": {\n              \"uri\": \"http://data.perseus.org/collections/urn:cite:perseus:latlexent.lex34119.1\",\n              \"dict\": {\n                \"hdwd\": {\n                  \"lang\": \"lat\",\n                  \"$\": \"mas\"\n                },\n                \"pofs\": {\n                  \"order\": 2,\n                  \"$\": \"adjective\"\n                },\n                \"decl\": {\n                  \"$\": \"3rd\"\n                }\n              },\n              \"infl\": [\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mare\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 2,\n                    \"$\": \"adjective\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"masculine\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"irreg_adj3\"\n                  },\n                  \"morph\": {\n                    \"$\": \"indeclform\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mare\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 2,\n                    \"$\": \"adjective\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"feminine\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"irreg_adj3\"\n                  },\n                  \"morph\": {\n                    \"$\": \"indeclform\"\n                  }\n                },\n                {\n                  \"term\": {\n                    \"lang\": \"lat\",\n                    \"stem\": {\n                      \"$\": \"mare\"\n                    }\n                  },\n                  \"pofs\": {\n                    \"order\": 2,\n                    \"$\": \"adjective\"\n                  },\n                  \"decl\": {\n                    \"$\": \"3rd\"\n                  },\n                  \"case\": {\n                    \"order\": 3,\n                    \"$\": \"ablative\"\n                  },\n                  \"gend\": {\n                    \"$\": \"neuter\"\n                  },\n                  \"num\": {\n                    \"$\": \"singular\"\n                  },\n                  \"stemtype\": {\n                    \"$\": \"irreg_adj3\"\n                  },\n                  \"morph\": {\n                    \"$\": \"indeclform\"\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n";

var Cepit = "{\n  \"RDF\": {\n    \"Annotation\": {\n      \"about\": \"urn:TuftsMorphologyService:cepit:whitakerLat\",\n      \"creator\": {\n        \"Agent\": {\n          \"about\": \"net.alpheios:tools:wordsxml.v1\"\n        }\n      },\n      \"created\": {\n        \"$\": \"2017-08-10T23:16:53.672068\"\n      },\n      \"hasTarget\": {\n        \"Description\": {\n          \"about\": \"urn:word:cepit\"\n        }\n      },\n      \"title\": {},\n      \"hasBody\": {\n        \"resource\": \"urn:uuid:idm140578133848416\"\n      },\n      \"Body\": {\n        \"about\": \"urn:uuid:idm140578133848416\",\n        \"type\": {\n          \"resource\": \"cnt:ContentAsXML\"\n        },\n        \"rest\": {\n          \"entry\": {\n            \"infl\": {\n              \"term\": {\n                \"lang\": \"lat\",\n                \"stem\": {\n                  \"$\": \"cep\"\n                },\n                \"suff\": {\n                  \"$\": \"it\"\n                }\n              },\n              \"pofs\": {\n                \"order\": 3,\n                \"$\": \"verb\"\n              },\n              \"conj\": {\n                \"$\": \"3rd\"\n              },\n              \"var\": {\n                \"$\": \"1st\"\n              },\n              \"tense\": {\n                \"$\": \"perfect\"\n              },\n              \"voice\": {\n                \"$\": \"active\"\n              },\n              \"mood\": {\n                \"$\": \"indicative\"\n              },\n              \"pers\": {\n                \"$\": \"3rd\"\n              },\n              \"num\": {\n                \"$\": \"singular\"\n              }\n            },\n            \"dict\": {\n              \"hdwd\": {\n                \"lang\": \"lat\",\n                \"$\": \"capio, capere, cepi, captus\"\n              },\n              \"pofs\": {\n                \"order\": 3,\n                \"$\": \"verb\"\n              },\n              \"conj\": {\n                \"$\": \"3rd\"\n              },\n              \"kind\": {\n                \"$\": \"transitive\"\n              },\n              \"freq\": {\n                \"order\": 6,\n                \"$\": \"very frequent\"\n              },\n              \"src\": {\n                \"$\": \"Ox.Lat.Dict.\"\n              }\n            },\n            \"mean\": {\n              \"$\": \"take hold, seize; grasp; take bribe; arrest/capture; put on; occupy; captivate;\"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n";

var Pilsopo = "{\n  \"RDF\": {\n    \"Annotation\": {\n      \"about\": \"urn:TuftsMorphologyService:φιλόσοφος:morpheuslat\",\n      \"creator\": {\n        \"Agent\": {\n          \"about\": \"org.perseus:tools:morpheus.v1\"\n        }\n      },\n      \"created\": {\n        \"$\": \"2017-10-15T14:06:40.522369\"\n      },\n      \"hasTarget\": {\n        \"Description\": {\n          \"about\": \"urn:word:φιλόσοφος\"\n        }\n      },\n      \"title\": {},\n      \"hasBody\": {\n        \"resource\": \"urn:uuid:idm140446394225264\"\n      },\n      \"Body\": {\n        \"about\": \"urn:uuid:idm140446394225264\",\n        \"type\": {\n          \"resource\": \"cnt:ContentAsXML\"\n        },\n        \"rest\": {\n          \"entry\": {\n            \"uri\": \"http://data.perseus.org/collections/urn:cite:perseus:grclexent.lex78378.1\",\n            \"dict\": {\n              \"hdwd\": {\n                \"lang\": \"grc\",\n                \"$\": \"φιλόσοφος\"\n              },\n              \"pofs\": {\n                \"order\": 3,\n                \"$\": \"noun\"\n              },\n              \"decl\": {\n                \"$\": \"2nd\"\n              },\n              \"gend\": {\n                \"$\": \"masculine\"\n              }\n            },\n            \"infl\": {\n              \"term\": {\n                \"lang\": \"grc\",\n                \"stem\": {\n                  \"$\": \"φιλοσοφ\"\n                },\n                \"suff\": {\n                  \"$\": \"ος\"\n                }\n              },\n              \"pofs\": {\n                \"order\": 3,\n                \"$\": \"noun\"\n              },\n              \"decl\": {\n                \"$\": \"2nd\"\n              },\n              \"case\": {\n                \"order\": 7,\n                \"$\": \"nominative\"\n              },\n              \"gend\": {\n                \"$\": \"masculine\"\n              },\n              \"num\": {\n                \"$\": \"singular\"\n              },\n              \"stemtype\": {\n                \"$\": \"os_ou\"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}";

class WordTestData {
  constructor () {
    this._words = {
      'cupidinibus': Cupidinibus,
      'mare': Mare,
      'cepit': Cepit,
      'φιλόσοφος': Pilsopo
    };
  }

  get (word) {
    if (this._words.hasOwnProperty(word)) {
      return this._words[word]
    }
    throw new Error(`Word "${word}" does not exist in test data`)
  }
}

var DefaultConfig = "{\n  \"engine\": {\n    \"lat\": [\"whitakerLat\"],\n    \"grc\": [\"morpheusgrc\"],\n    \"ara\": [\"aramorph\"],\n    \"per\": [\"hazm\"]\n  },\n  \"url\": \"https://morph.alpheios.net/api/v1/analysis/word?word=r_WORD&engine=r_ENGINE&lang=r_LANG\",\n  \"allowUnknownValues\": true\n}\n";

class AlpheiosTuftsAdapter extends BaseAdapter {
  /**
   * A Morph Client Adapter for the Tufts Morphology Service
   * @constructor
   * @param {object} config configuraiton object
   */
  constructor (config = {}) {
    super();
    try {
      this.config = JSON.parse(DefaultConfig);
    } catch (e) {
      this.config = Object.assign({}, DefaultConfig);
    }
    Object.assign(this.config, config);
    this.engineMap = new Map(([ data, data$1, data$2, data$3 ]).map((e) => { return [ e.engine, e ] }));
  }

  getEngineLanguageMap (lang) {
    if (this.config.engine[lang]) {
      return this.engineMap.get(this.config.engine[lang][0])
    } else {
      return null
    }
  }

  prepareRequestUrl (lang, word) {
    let engine = this.getEngineLanguageMap(lang);
    if (engine) {
      let code = engine.engine;
      return this.config.url.replace('r_WORD', word).replace('r_ENGINE', code).replace('r_LANG', lang)
    } else {
      return null
    }
  }

  fetchTestData (lang, word) {
    return new Promise((resolve, reject) => {
      try {
        let wordData = new WordTestData().get(word);
        let json = JSON.parse(wordData);
        resolve(json);
      } catch (error) {
        // Word is not found in test data
        reject(error);
      }
    })
  }

  /**
   * A function that maps a morphological service's specific data types and values into an inflection library standard.
   * @param {object} jsonObj - A JSON data from a Morphological Analyzer.
   * @param {object} targetWord - the target of the analysis
   * @returns {Models.Homonym} A library standard Homonym object.
   */
  transform (jsonObj, targetWord) {
    'use strict';
    let lexemes = [];
    let annotationBody = jsonObj.RDF.Annotation.Body;
    if (!Array.isArray(annotationBody)) {
      /*
      If only one lexeme is returned, Annotation Body will not be an array but rather a single object.
      Let's convert it to an array so we can work with it in the same way no matter what format it is.
      */
      if (annotationBody) {
        annotationBody = [annotationBody];
      } else {
        annotationBody = [];
      }
    }
    let providerUri = jsonObj.RDF.Annotation.creator.Agent.about;
    let providerRights = '';
    if (jsonObj.RDF.Annotation.rights) {
      providerRights = jsonObj.RDF.Annotation.rights.$;
    }
    let provider = new ResourceProvider(providerUri, providerRights);
    for (let lexeme of annotationBody) {
      let inflectionsJSON = lexeme.rest.entry.infl;
      if (!inflectionsJSON) {
        inflectionsJSON = [];
      } else if (!Array.isArray(inflectionsJSON)) {
        // If only one inflection returned, it is a single object, not an array of objects.
        // Convert it to an array for uniformity.
        inflectionsJSON = [inflectionsJSON];
      }
      let lemmaElements;
      let features = [
        ['pofs', 'part'],
        ['case', 'grmCase'],
        ['gend', 'gender'],
        ['decl', 'declension'],
        ['conj', 'conjugation'],
        ['area', 'area'],
        ['age', 'age'],
        ['geo', 'geo'],
        ['freq', 'frequency'],
        ['note', 'note'],
        ['pron', 'pronunciation'],
        ['src', 'source'],
        ['kind', 'kind']
      ];
      if (lexeme.rest.entry.dict) {
        if (Array.isArray(lexeme.rest.entry.dict)) {
          lemmaElements = lexeme.rest.entry.dict;
        } else {
          if (!lexeme.rest.entry.dict.hdwd && inflectionsJSON[0].term) {
            lexeme.rest.entry.dict.hdwd = {};
            lexeme.rest.entry.dict.hdwd.lang = inflectionsJSON[0].term.lang;
            lexeme.rest.entry.dict.hdwd.$ = inflectionsJSON[0].term.stem.$ + inflectionsJSON[0].term.suff.$;
          }
          lemmaElements = [lexeme.rest.entry.dict];
        }
      } else if (inflectionsJSON.length > 0 && inflectionsJSON[0].term) {
        lemmaElements = [ inflectionsJSON[0].term ];
      }
      // in rare cases (e.g. conditum in Whitakers) multiple dict entries
      // exist - always use the lemma and language from the first
      let language = lemmaElements[0].hdwd ? lemmaElements[0].hdwd.lang : lemmaElements[0].lang;
      // Get importer based on the language
      let mappingData = this.getEngineLanguageMap(language);
      let lemmas = [];
      let lexemeSet = [];
      for (let entry of lemmaElements.entries()) {
        let shortdefs = [];
        let index = entry[0];
        let elem = entry[1];
        let lemmaText;
        if (elem.hdwd) {
          lemmaText = elem.hdwd.$;
        }
        if (!lemmaText || !language) {
          continue
        }
        let lemma = mappingData.parseLemma(lemmaText, language);
        lemmas.push(lemma);
        for (let feature of features) {
          mappingData.mapFeature(lemma, elem, ...feature, this.config.allowUnknownValues);
        }
        let meanings = lexeme.rest.entry.mean;
        if (!Array.isArray(meanings)) {
          meanings = [meanings];
        }
        meanings = meanings.filter((m) => m);
        // if we have multiple dictionary elements, take the meaning with the matching index
        if (lemmaElements.length > 1) {
          if (meanings && meanings[index]) {
            let meaning = meanings[index];
            // TODO: convert a source-specific language code to ISO 639-3 if don't match
            let lang = meaning.lang ? meaning.lang : 'eng';
            shortdefs.push(ResourceProvider.getProxy(provider,
              new Definition(meaning.$, lang, 'text/plain', lemmas[index].word)));
          }
        } else {
          // Changed to prevent some weird "Array Iterator.prototype.next called on incompatible receiver [object Unknown]" error
          let sDefs = meanings.map(meaning => {
            let lang = meaning.lang ? meaning.lang : 'eng';
            return ResourceProvider.getProxy(provider,
              new Definition(meaning.$, lang, 'text/plain', lemma.word))
          });
          shortdefs.push(...sDefs);
        }
        let lexmodel = new Lexeme(lemma, []);

        lexmodel.meaning.appendShortDefs(shortdefs);
        lexemeSet.push(ResourceProvider.getProxy(provider, lexmodel));
      }
      if (lemmas.length === 0) {
        continue
      }
      let inflections = [];
      for (let inflectionJSON of inflectionsJSON) {
        let inflection = new Inflection(inflectionJSON.term.stem.$, mappingData.model.languageID);
        if (targetWord) {
          inflection.addFeature(new Feature(Feature.types.fullForm, targetWord, mappingData.model.languageID));
        }
        if (inflectionJSON.term.suff) {
          // Set suffix if provided by a morphological analyzer
          inflection.suffix = inflectionJSON.term.suff.$;
        }

        if (inflectionJSON.xmpl) {
          inflection.example = inflectionJSON.xmpl.$;
        }
        // Parse whatever grammatical features we're interested in
        mappingData.mapFeature(inflection, inflectionJSON, 'pofs', 'part', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'case', 'grmCase', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'decl', 'declension', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'num', 'number', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'gend', 'gender', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'conj', 'conjugation', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'tense', 'tense', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'voice', 'voice', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'mood', 'mood', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'pers', 'person', this.config.allowUnknownValues);
        mappingData.mapFeature(inflection, inflectionJSON, 'comp', 'comparison', this.config.allowUnknownValues);
        if (inflectionJSON.stemtype) {
          mappingData.mapFeature(inflection, inflectionJSON, 'stemtype', 'stemtype', this.config.allowUnknownValues);
        }
        if (inflectionJSON.derivtype) {
          mappingData.mapFeature(inflection, inflectionJSON, 'derivtype', 'derivtype', this.config.allowUnknownValues);
        }
        if (inflectionJSON.dial) {
          mappingData.mapFeature(inflection, inflectionJSON, 'dial', 'dialect', this.config.allowUnknownValues);
        }
        if (inflectionJSON.morph) {
          mappingData.mapFeature(inflection, inflectionJSON, 'morph', 'morph', this.config.allowUnknownValues);
        }
        // we only use the inflection if it tells us something the dictionary details do not
        if (inflection[Feature.types.grmCase] ||
          inflection[Feature.types.tense] ||
          inflection[Feature.types.mood] ||
          inflection[Feature.types.voice] ||
          inflection[Feature.types.person] ||
          inflection[Feature.types.comparison] ||
          inflection[Feature.types.stemtype] ||
          inflection[Feature.types.derivtype] ||
          inflection[Feature.types.dialect] ||
          inflection[Feature.types.morph] ||
          inflection[Feature.types.example]) {
          inflections.push(inflection);
        }
        // inflection can provide lemma decl, pofs, conj
        for (let lemma of lemmas) {
          if (!lemma.features[Feature.types.part]) {
            mappingData.mapFeature(lemma, inflectionJSON, 'pofs', 'part', this.config.allowUnknownValues);
          }
          // only take declension from inflection if lemma has no part of speech or its the same as the inflection
          if (!lemma.features[Feature.types.declension] &&
            (!lemma.features[Feature.types.part] || lemma.features[Feature.types.part].isEqual(inflection[Feature.types.part]))) {
            mappingData.mapFeature(lemma, inflectionJSON, 'decl', 'declension', this.config.allowUnknownValues);
          }
          // only take conjugation from inflection if lemma has a part of speech and its the same as the inflection
          if (!lemma.features[Feature.types.conjugation] &&
            (!lemma.features[Feature.types.part] || lemma.features[Feature.types.part].isEqual(inflection[Feature.types.part]))) {
            mappingData.mapFeature(lemma, inflectionJSON, 'conj', 'conjugation', this.config.allowUnknownValues);
          }
        }
      }
      for (let lex of lexemeSet) {
        // only process if we have a lemma that differs from the target
        // word or if we have at least a part of speech
        if (mappingData.reportLexeme(lex)) {
          lex.inflections = inflections;
          lexemes.push(lex);
        }
      }
    }
    if (lexemes.length > 0) {
      return new Homonym(lexemes, targetWord)
    } else {
      return undefined
    }
  }

  async getHomonym (lang, word) {
    let jsonObj = await this.fetch(lang, word);
    if (jsonObj) {
      let homonym = this.transform(jsonObj, word);
      return homonym
    } else {
      // No data found for this word
      return undefined
    }
  }
}

export { BaseAdapter, AlpheiosTuftsAdapter };
//# sourceMappingURL=alpheios-morph-client.standalone.js.map
