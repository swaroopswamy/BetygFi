import { Box } from '@chakra-ui/react';

const TopCoinToolBar = ({ onMaximiseClick, chartData }) => {

    return (
        <Box display={"flex"} flexDir={"row"}  >
            <i style={{ margin: "0rem 0.5rem" }} className='icon info_light' />
            {/* <i style={{ margin: "0rem 0.5rem" }} className='icon share_light' /> */}
            <i style={{ margin: "0rem 0.5rem" }} className='icon maximize_light' onClick={() => onMaximiseClick(chartData)} />
        </Box >
    );
};

export default TopCoinToolBar;
