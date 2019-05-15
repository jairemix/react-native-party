import 'expo';

type FontNames =
  'AntDesign' |
  'Entypo' |
  'EvilIcons' |
  'Feather' |
  'FontAwesome' |
  'Foundation' |
  'Ionicons' |
  'MaterialCommunityIcons' |
  'MaterialIcons' |
  'Octicons' |
  'SimpleLineIcons' |
  'Zocial';

type Font = {
  font: {
    [K: string]: number;
  };
  getFontFamily: Function;
  getRawGlyphMap: Function;
  glyphMap: {
    [K: string]: number;
  };
}

declare module 'expo' {

  declare const Icon: {
    [K in FontNames]: Font;
  }

}
