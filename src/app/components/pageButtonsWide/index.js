import { Text, Box, useColorMode, Input, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import LastUpdate from "../lastUpdate";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const PageButtonsWide = ({ page, totalPages = 0, pageChangeHandler, tableLimit, setTableLimit, time, ...rest }) => {
  const { colorMode } = useColorMode();

  if (totalPages === 0) {
    return;
  }

  return (
    <>
      <Box display={{base: "none", md: "flex"}} justifyContent={"space-between"} alignItems={"center"} {...rest}>
        <LastUpdate
          time={time}
        />

        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={"8px"}>
          <RoundButton opacity={"0.4"}
            onClick={() => {
              pageChangeHandler(1);
            }}
          >
            <ArrowLeftIcon
              boxSize={"12px"}
            />
          </RoundButton>

          <RoundButton opacity={"0.4"}
            onClick={() => {
              pageChangeHandler(page - 1);
            }}
          >
            <ChevronLeftIcon />
          </RoundButton>

          <Box layerStyle={"center"} gap={"8px"}>
            <Input
              p={"8px 15px"}
              borderRadius={"0px"}
              borderColor={colorMode === 'light' ? "#E8E8E8" : "#454853"}
              background={colorMode === 'light' ? "#F0F0F5" : "#191919"}
              width={"65px"}
              height={"30px"}
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                pageChangeHandler(value);
              }}
              value={page}
              textAlign={"center"}
            ></Input>

            <Text variant={"h3"}>
              of {totalPages} pages
            </Text>
          </Box>

          <RoundButton opacity={"1"}
            onClick={() => {
              pageChangeHandler(page + 1);
            }}
          >
            <ChevronRightIcon />
          </RoundButton>

          <RoundButton opacity={"1"}
            onClick={() => {
              pageChangeHandler(totalPages);
            }}
          >
            <ArrowRightIcon
              boxSize={"12px"}
            />
          </RoundButton>
        </Box>

        <Box layerStyle={"center"} gap={"8px"}>
          <Text variant={"h3"}> Show </Text>

          <Menu>
            <MenuButton as={Button} variant={"menu"}>
                <Box layerStyle={"spaceBetween"} >
                  {tableLimit} / Page
                  <ChevronDownIcon />
                </Box>
            </MenuButton>
            <MenuList
              boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
              bgColor={colorMode === "light" ? "#FFF" : "#191919"}
              width={"100px"}
            >
              <PageMenuItem onClick={() => {setTableLimit(10)}}> 10 / Page </PageMenuItem>
              <PageMenuItem onClick={() => {setTableLimit(20)}}> 20 / Page </PageMenuItem>
              <PageMenuItem onClick={() => {setTableLimit(30)}}> 30 / Page </PageMenuItem>
            </MenuList>
          </Menu>
        </Box>

      </Box>

      <Box display={{base: "flex", md: "none"}} flexDir={"column"} gap={"30px"} justifyContent={"space-between"} alignItems={"center"} {...rest}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
          <LastUpdate time={time} />

          <Menu width={"100px"}>
            <MenuButton as={Button} variant={"menu"}>
              <Box layerStyle={"spaceBetween"} >
                {tableLimit} / Page
                <ChevronDownIcon />
              </Box>
            </MenuButton>
            <MenuList
              boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
              bgColor={colorMode === "light" ? "#FFF" : "#191919"}
              width={"100px"}
            >
              <PageMenuItem onClick={() => { setTableLimit(10) }}> 10 / Page </PageMenuItem>
              <PageMenuItem onClick={() => { setTableLimit(20) }}> 20 / Page </PageMenuItem>
              <PageMenuItem onClick={() => { setTableLimit(30) }}> 30 / Page </PageMenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={"8px"} w={"100%"}>
          <RoundButton opacity={"0.4"}
            onClick={() => {
              pageChangeHandler(1);
            }}
          >
            <ArrowLeftIcon
              boxSize={"12px"}
            />
          </RoundButton>

          <RoundButton opacity={"0.4"}
            onClick={() => {
              pageChangeHandler(page - 1);
            }}
          >
            <ChevronLeftIcon />
          </RoundButton>

          <Box layerStyle={"center"} gap={"8px"}>
            <Input
              p={"8px 15px"}
              borderRadius={"0px"}
              borderColor={colorMode === 'light' ? "#E8E8E8" : "#454853"}
              background={colorMode === 'light' ? "#F0F0F5" : "#191919"}
              width={"65px"}
              height={"30px"}
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                pageChangeHandler(value);
              }}
              value={page}
              textAlign={"center"}
            ></Input>

            <Text variant={"h3"}>
              of {totalPages} pages
            </Text>
          </Box>

          <RoundButton opacity={"1"}
            onClick={() => {
              pageChangeHandler(page + 1);
            }}
          >
            <ChevronRightIcon />
          </RoundButton>

          <RoundButton opacity={"1"}
            onClick={() => {
              pageChangeHandler(totalPages);
            }}
          >
            <ArrowRightIcon
              boxSize={"12px"}
            />
          </RoundButton>
        </Box>
      </Box>
    </>
  );
};

export default PageButtonsWide;

const RoundButton = ( {children, ...rest} ) => {
  const { colorMode } = useColorMode();

  return (
    <Box
        layerStyle={"center"}
        bg={colorMode === 'light' ? '#FFFFFF' : '#191919'}
        minW={"32px"}
        minH={"32px"}
        borderRadius={"50%"}
        border={colorMode === 'light' ? "1px solid rgba(241, 241, 241, 1)" : "1px solid rgba(51, 51, 51, 1)"}
        cursor={"pointer"}
        {...rest}
    >
      {children}
    </Box>
  )
}

const PageMenuItem = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <MenuItem
      bgColor={colorMode === "light" ? "#FFF" : "#191919"}
      _hover={{
        bg: colorMode === "light" ? "#F5F5F7" : "#202020",
      }}
      {...rest}
    >
        <Text variant={"h3"} color={colorMode === 'light' ? '#191919' : '#FFFFFF'}>
          {children}
        </Text>
      </MenuItem>
  )
}
