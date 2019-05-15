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

declare module 'expo' {

  declare const Icon: {
    [K in FontNames]: any;
  }

}
