import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  simpleFlexContainer: {
    flex: 1,
    alignItems: 'center',
  },
  leftAlignedContainer: {
    alignItems: 'flex-start',
  },
  simpleText: {
    flexGrow: 1,
    color: 'black',
    textAlign: 'left',
  },
  simpleInput: {
    flexGrow: 1,
    textAlignVertical: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
});
