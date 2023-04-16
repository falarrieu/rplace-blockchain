import { Drawer } from "@material-ui/core";
import styled from "@emotion/styled";

const closedDrawerWidth = '100%';
const openDrawerWidth = '100%'
const openDrawerHeight = '44px'
const closedDrawerHeight = '44px';

const openedStyling = (theme) => ({
    width: openDrawerWidth,
    height: openDrawerHeight,
    transition: theme.transitions.create('width', {
    	easing: theme.transitions.easing.sharp,
      	duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
const closedStyling = (theme) => ({
    width: closedDrawerWidth,
    height: closedDrawerHeight,
    transition: theme.transitions.create('width', {
    	easing: theme.transitions.easing.sharp,
    	duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
});

const MiniDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
		width: openDrawerWidth,
        height: closedDrawerHeight,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
        ...(open ? openedStyling(theme) : closedStyling(theme)),
        '& .MuiDrawer-paper': {
            ...(open ? openedStyling(theme) : closedStyling(theme)),
            justifyContent: 'center',
            flexDirection: 'row'
        }
    }),
);

export default MiniDrawer;