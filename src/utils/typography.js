import Typography from "typography";
import fairyGateTheme from 'typography-theme-fairy-gates'
fairyGateTheme.baseFontSize = '22px';
fairyGateTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: `none`,
    backgroundImage: `none`,
  },
});

const typography = new Typography(
  fairyGateTheme
);

export default typography