import { Tabs, TabList, Tab } from "@chakra-ui/react";
const ProductsNav = ({ onfilter }) => {
  return (
    <Tabs isManual isFitted colorScheme="red" align="center">
      <TabList>
        <Tab onClick={onfilter}>Foods</Tab>
        <Tab onClick={onfilter}>Drinks</Tab>
        <Tab onClick={onfilter}>Souce</Tab>
        <Tab onClick={onfilter}>Snacks</Tab>
        <Tab onClick={onfilter}>Other</Tab>
      </TabList>
    </Tabs>
  );
};

export default ProductsNav;
