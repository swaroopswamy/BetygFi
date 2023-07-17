"use client"
import { Box, Container, Grid, GridItem, Heading, Text, extendTheme, Manrope } from "@chakra-ui/react";
import styles from "../page.module.css";
import { useControllableState } from "@chakra-ui/react-use-controllable-state";
import { mergeRefs } from "@chakra-ui/react-use-merge-refs";
import { callAllHandlers, warn } from "@chakra-ui/shared-utils";
import { useCallback, useEffect, useId, useRef, useState } from "react";


export default function Dashboard() {
  return (
    <>
      {     <Container className={styles.container}>
        <Box className={styles.box1}>
          <Grid>
            <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.terms}>
            Terms and Conditons
            </GridItem>
            <GridItem colSpan={2} colStart={2} colEnd={4}>
              <i className={styles.logo}></i>
            </GridItem>
          </Grid>
        </Box>

        <Box className={styles.box2} margin-bottom ="10px" >
          <Text className={styles.termtext}>
            Fusce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.
            </Text>

            <Text className={styles.termtext}>
            Donec mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc. Vivamus ut pellentesque est. Ut at dignissim mi, sit amet rutrum tortor.
            Nunc dictum enim at risus aliquam hendrerit. Mauris pretium tristique tempus. Integer congue lectus fringilla facilisis condimentum. Nunc ultricies cursus est nec tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean convallis interdum est eu ultricies. Nullam et condimentum nunc. Aenean eget turpis vitae enim varius facilisis eget id sem. Nam porta nisi nibh, in efficitur mauris viverra quis. Donec eleifend odio est, et dignissim neque aliquam efficitur. Nunc sit amet libero quam. Nulla facilisi. Suspendisse eget dui id nisi vehicula sodales. Vivamus sagittis iaculis orci id maximus.
            </Text>

            <Text className={styles.termtext}>
            Vestibulum vitae est quis libero mollis posuere eget gravida lacus. Pellentesque vitae efficitur tortor, vitae euismod tortor. Fusce ut dictum elit. Donec nisi erat, vulputate a elementum non, mollis id nisl. Donec hendrerit nulla enim, ut facilisis orci lobortis in. Aliquam gravida augue ut diam dignissim sollicitudin at at tortor. In ipsum arcu, suscipit nec ornare vel, sagittis quis elit. Quisque sed elit semper, ultrices diam quis, interdum eros. Fusce arcu diam, eleifend nec faucibus in, accumsan at massa. Phasellus ut felis auctor, accumsan quam vitae, ultrices neque. Praesent eleifend diam eu libero suscipit, ut rutrum tellus fermentum. Fusce eu ligula libero. Nulla consequat convallis velit, sit amet mollis felis euismod nec. Morbi pretium, erat eu porta dignissim, lectus justo varius lectus, et lobortis dui massa id mi.
            </Text>

            <Text className={styles.termtext} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique hendrerit tortor et tempor. Fusce scelerisque, risus id rhoncus ultricies, arcu nisl sagittis sapien, quis cursus augue sapien tincidunt ipsum. Cras eget felis vel enim posuere porta. Integer condimentum pellentesque nisi vel iaculis. Donec eget finibus mi, vitae ultrices turpis. Nulla orci sapien, viverra quis placerat id, pellentesque ac tellus. Fusce nec finibus erat.
          </Text>
        </Box>
      </Container>
    }
    </>

  );
}
