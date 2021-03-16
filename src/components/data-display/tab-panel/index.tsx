import React from 'react';
import { TabPanelContainer, MuiBox as Box } from './styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => {
  const isVisible = index === value;
  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={!isVisible}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {isVisible && <Box p={3}>{children}</Box>}
    </TabPanelContainer>
  );
};

export default TabPanel;
