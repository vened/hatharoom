import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UiAvatar from './UiAvatar';
import UiBadge from './UiBadge';
import UiButtons from './UiButtons';
import UiCalendar from './UiCalendar';
import UiCard from './UiCard';
import UiCarousel from './UiCarousel';
import UiCollapse from './UiCollapse';
import UiPopover from './UiPopover';
import UiTooltip from './UiTooltip';

import UiBase from './UiBase';
import UiComponents from './UiComponents';
import './ui.less';

const UI = () => (
  <Switch>
    <Route exact path="/ui" component={UiBase} />
    <Route path="/ui/avatar" component={UiAvatar} />
    <Route path="/ui/badge" component={UiBadge} />
    <Route path="/ui/buttons" component={UiButtons} />
    <Route path="/ui/calendar" component={UiCalendar} />
    <Route path="/ui/card" component={UiCard} />
    <Route path="/ui/carousel" component={UiCarousel} />
    <Route path="/ui/collapse" component={UiCollapse} />
    <Route path="/ui/popover" component={UiPopover} />
    <Route path="/ui/tooltip" component={UiTooltip} />
    <Route path="/ui/components" component={UiComponents} />
  </Switch>
  );

export default UI;
