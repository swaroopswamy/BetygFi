import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { categoryChangedReducer } from "@redux/dashboard_data/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { defiCategories } from "@util/constant";

const DashboardDefiSelection = () => {
    const dispatch = useDispatch();

    const categorySelected = useSelector(
        (state) => state?.dashboardTableData?.categorySelected
    );
    const categoryChangedHandler = (category) => {
        dispatch(categoryChangedReducer(category));
    };
    const [isMd] = useMediaQuery("(min-width: 768px)");
    return isMd ? (
        <>
            <Box
                display={"flex"}
                h={"40px"}
                px={{ base: "18px", md: "0px" }}
            >
                <Button
                    variant={{ base: "defiMobile", md: "defi" }}
                    isActive={categorySelected.length === 0}
                    onClick={() => categoryChangedHandler("All")}
                    _light={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                    _dark={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    mr="7px"
                    fontSize={"14px"}
                    borderRadius={"30px"}
                >
                    All
                </Button>
                {defiCategories.map((category, i) => (
                    <Button
                        mr="7px"
                        key={i}
                        borderRadius={"30px"}
                        fontSize={"14px"}
                        variant={{ base: "defiMobile", md: "defi" }}
                        isActive={categorySelected.includes(category.id)}
                        onClick={() => categoryChangedHandler(category.id)}
                        _light={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                        _dark={{
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {category.name}
                    </Button>
                ))}
            </Box>
        </>
    ) : (
        <>
            <Box
                display={"flex"}
                h={"40px"}
                px={{ base: "0px", md: "30px" }}
            >
                <Button
                    variant={{ base: "defiMobile", md: "defi" }}
                    isActive={categorySelected.length === 0}
                    onClick={() => categoryChangedHandler("All")}
                    _light={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                    _dark={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                >
                    All
                </Button>
                {defiCategories.map((category, i) => (
                    <Button
                        key={i}
                        variant={{ base: "defiMobile", md: "defi" }}
                        isActive={categorySelected.includes(category.id)}
                        onClick={() => categoryChangedHandler(category.id)}
                        _light={{
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                        _dark={{
                            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {" "}
                        {category.name}{" "}
                    </Button>
                ))}
            </Box>
        </>
    );
};

export default DashboardDefiSelection;