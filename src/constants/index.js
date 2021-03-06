const translationsFileTypes = {
  IOS: 'IOS',
  ANDROID: 'ANDROID'
};

const translationsFileNames = {
  IOS: 'Localizable.strings',
  ANDROID: 'strings.xml'
};

module.exports = {
  parseltongueHost: {
    test: 'http://localhost:9000',
    dev: 'https://dev-parseltongue.onmap.co.il',
    prod: 'https://parseltongue.onmap.co.il'
  },

  // entryTypes from 'unzip' module
  entryTypes: {
    FILE: 'File',
    DIRECTORY: 'Directory'
  },

  translationsFileTypes,
  translationsFileNames,

  translationsDirectoryNames: {
    IOS: '.lproj',
    ANDROID: 'values-'
  },

  translationFilesDescription: [
    {
      type: translationsFileTypes.IOS,
      fileName: translationsFileNames.IOS
    },
    {
      type: translationsFileTypes.ANDROID,
      fileName: translationsFileNames.ANDROID
    }
  ],

  xmlParserOptions: {
    attrkey: 'key',
    charkey: 'value',
    explicitRoot: false,
    trim: true
  },

  xmlBuilderOptions: {
    attrkey: '$', // default xml parse option, need for build
    charkey: '_',
    tagName: 'string',
    attributeName: 'name',
    constructorOpts: {
      rootName: 'resources',
      xmldec: {
        standalone: undefined,
        encoding: 'utf-8'
      }
    }
  },

  xmlStoryboardOptions: {
    attributeName: 'userDefinedRuntimeAttribute'
  }
};
