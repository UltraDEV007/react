import 'babel-polyfill';
import { configure, addDecorator, setAddon } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import infoAddon from '@kadira/react-storybook-addon-info';

addDecorator(muiTheme());
setAddon(infoAddon);

const req = require.context('../src', true, /.story.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
