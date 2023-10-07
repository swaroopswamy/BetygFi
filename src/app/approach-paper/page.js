"use client"
import { Box, Container, Image, useColorModeValue, Text, Heading, useColorMode, div, h1, h2, br, Flex, Button } from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";

const Approach = () => {
  const handleScrollToTop = () => {
    window && window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { colorMode } = useColorMode();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowScrollButton(true) : setShowScrollButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {
        <Box maxW={"100%"} padding={"0px"}>

          <Box background={useColorModeValue("#E8E8E8", "#222")}
            display={{ base: "none", md: "block" }}>

            <Box display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}>

              <Box
                fontSize={"36px"}
                fontWeight={400}
                lineHeight={"46px"}
                color={useColorModeValue("#191919", "#FFFFFF")}
                padding={"90px 0px 0px 50px"} >
                Approach Paper
              </Box>

              <Box paddingRight={"100px"}>
                <Image src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")} alt=""></Image>
              </Box>
            </Box>
          </Box>

          <Box width={"90%"}
            display={{ base: "none", md: "block" }}>



            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>1. Abstract:</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                Decentralized Finance (DeFi) has gained significant traction in recent years. We believe that, in
                the future Decentralized Finance holds promise for it has the potential to democratize finance
                like never before; its potential is premised on its ability to comply with rules and regulations of
                the sovereign and its ability to continuously demonstrate that it does not intend to defraud the
                community that supports and nurtures it.<br /> <br />

                BetygFi is a comprehensive machine learning-based approach to assess DeFi protocols. The goal
                is to evolve a robust, real time, neutral, self-learning approach towards analyzing DeFi’s.<br /> <br />

                The model underpinning Betygfi currently analyses technical risk, centralization risk,
                financial/market risk, and userbase quality risks. The model currently leverages a combination
                of supervised and unsupervised learning techniques to enable classification of DeFi
                protocols/projects.</Text>
            </Box>


            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>2. Data Collection and Processing</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                At the core of every machine learning model are dependable data sources/data sets, an
                efficient data pipeline, and dependable data normalization techniques. Solvendo, through its
                work in traditional finance understands the significance of a robust ETL (extraction,
                transformation and loading) methodology.<br /> <br />
                Below is a recital of the Datasets and Features that we collect, real-time, to train and evaluate
                our model. We currently compile data on the following features:</Text>

              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>2.1 Technical Risk</Heading>
                <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                  • Time on Mainnet <br />
                  • Number of Critical Vulnerabilities <br />
                  • Public Audit <br />
                  • Recent Audit <br />
                  • Open Source <br />
                  • Byte Source code verified <br />
                  • Number of Engineers working <br />
                  • Number of code commits <br />
                  • Bounty Program</Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>2.2 Centralization Risk</Heading>
                <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                  • Protocol Administration <br />
                  • Private Key Model and arrangement <br />
                  • Oracles <br />
                  • Governance Token Concentration</Text>
              </Box>


              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>2.3 Financial/Market Risk</Heading>
                <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                  • Collateralization Ratio <br />
                  • 30-day Exponential Moving Average (EMA) <br />
                  • Liquidity 30-day EMA <br />
                  • Total Value Locked (TVL) 30-day EMA  <br />
                  • Volume Weighted Average Price (VWAP)  <br />
                  • Relative Strength Index (RSI)  <br />
                  • Asset Breakdown </Text>
              </Box>


              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>2.4 Userbase Quality</Heading>
                <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                  • Repayment <br />
                  • Active Loans <br />
                  • Asset Quality <br />
                  • Asset Liquidation Threshold  </Text>
              </Box>
            </Box>


            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>3. Model Training Methodology</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                Our approach combines supervised and unsupervised machine learning techniques to derive a
                comprehensive scoring system for DeFi protocols. With reference to the ETL process mentioned
                above, currently we first preprocess data by normalizing features; then deal with the missing
                values and encode categorical variables. We thereafter perform the following steps:</Text>


              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>3.1 Unsupervised Learning</Heading>
                <Text paddingTop={"10px"} fontSize={"14px"} paddingLeft={"50px"}>
                  • Implement clustering algorithms (e.g., K-means, DBSCAN) to identify patterns and
                  group DeFi protocols based on their inherent risk characteristics. <br />
                  • Analyze the resulting clusters to derive insights into the risk profiles of different DeFi
                  protocols.  </Text>
              </Box>


              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>3.2 Supervised Learning</Heading>
                <Text paddingTop={"10px"} fontSize={"14px"} paddingLeft={"50px"}>
                  • Train classification models (e.g., Random Forest, Support Vector Machine, Neural
                  Networks) on a labeled dataset, where each DeFi protocol is assigned a risk score
                  based on expert opinion or historical performance. <br />
                  • Evaluate the performance of the classifiers using metrics such as accuracy, precision,
                  recall, and F1 score. <br />
                  • Optimize the best-performing model using techniques such as hyperparameter
                  tuning and feature selection. <br />
                </Text>
              </Box>
            </Box>



            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>4. Model Evaluation:</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                After training and optimizing the model, we evaluate the model's performance on a test
                dataset. We use a myriad of approaches including comparing the model’s generated scores
                with actual performance. We also analyze feature importance to understand the key factors
                contributing to the risk profiles of DeFi protocols.</Text>
            </Box>




            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>5. Scoring:</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                We truly believe that all the advances in machine learning including natural language
                processing (NLP) through foundation models, can best be utilized to navigate real world
                problems - by designing solutions that are binary but explainable. This approach enables users
                to understand and consume the output easily. This belief is at the core of Solvendo’s thesis and
                existence and is also reflected in the approach at BetygFi. <br />
                The Solvendo score that underpins the efforts at BetygFi is intended to enable users to
                understand at a glance, the risk reward profile of DeFi protocols to further enable informed
                decision making. As indicated above currently the score comprises an analysis of DeFi's
                technical, centralization, financial/market, and userbase quality risks.
              </Text>
            </Box>




            <Box padding={"29px 0px 0px 50px"} color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1" size="xl" fontSize={"22px"} paddingTop={"10px"}>6. Future:</Heading>
              <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>The model’s evolution will be reflected in the accuracy, predictive performance and therefore
                usefulness of the score. We have a broad outline of how we plan to train and evolve the model
                for the benefit of users and their better understanding of DeFi protocols/projects. <br />
                Keeping with our intention to continuously improve the accuracy and efficiency of the model,
                our ongoing efforts include as under:
              </Text>



              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>6.1 Feature Set Expansion:</Heading>
                <Text fontSize={"14px"} padding={"10px 0px 10px 40px"}>
                  Additional features will continuously be included to enable a
                  comprehensive view of the risks associated with DeFi protocols. In our opinion, incorporating
                  data on protocol-specific features or emerging risks would enhance the model's performance.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>6.2 Real-Time Risk Assessment:</Heading>
                <Text fontSize={"14px"} padding={"10px 0px 10px 40px"}>
                  It is our continuous pursuit to make our ETL process real time;
                  to enable us to integrate real time data into the model, thus to enable dynamic real time risk
                  assessment for DeFi protocols. We believe that such real time risk assessment would be a game
                  changer in risk assessment and management.
                </Text>
              </Box>


              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>6.3 Better Machine Learning Techniques: </Heading>
                <Text fontSize={"14px"} padding={"10px 0px 10px 40px"}>
                  We continue to explore advancements in machine
                  learning. The space is fast evolving and is at the moment witnessing a gold rush. As a
                  consequence of these efforts, we expect promising first and second layer approaches and use
                  cases. For example, better deep learning or ensemble methods could potentially improve the
                  predictive performance of the model. Implementing recurrent neural networks (RNNs) or
                  4
                  transformers to analyze time-series data or using stacking techniques to combine the
                  predictions of multiple models could yield better results.
                </Text>
              </Box>



              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>6.4 Explainable Results: </Heading>
                <Text fontSize={"14px"} padding={"10px 0px 10px 40px"}>
                  Notwithstanding all of the benefits of machine learning, we anticipate
                  black box models will face significant challenges, as results and use cases from such models
                  become more mainstream. It is accepted that increase in complexity of the model makes it
                  more challenging to interpret, complexity also makes it difficult to understand the logic behind
                  the model's decisions. Implementing explainable AI techniques, such as Shapley Additive
                  Explanations (SHAP) values or Local Interpretable Model-agnostic Explanations (LIME), usually
                  help stakeholders better understand the underlying reasons behind the model's risk
                  assessments. It is our constant endeavor to deploy the best available tools to enable us to best
                  explain our efforts and results.
                </Text>
              </Box>



              <Box padding={"29px 0px 0px 70px"}>
                <Heading as="h2" size="lg" fontSize={"18px"} paddingTop={"10px"}>6.5 Cross-Chain and Layer-2 Protocols: </Heading>

                <Text fontSize={"14px"} padding={"10px 0px 80px 40px"}>
                  As the DeFi ecosystem continues to evolve, we expect
                  more cross-chain and layer-2 protocols to emerge. Incorporating these new technologies into
                  our risk assessment framework will be crucial to enable us to continue to provide a
                  comprehensive and up-to-date understanding of the DeFi landscape and associated risks. <br /><br />
                  Our approach is an attempt to explain transparently our value proposition and efforts. We hope
                  to continuously strive to enable actionable insights for stakeholders in the decentralized
                  financial ecosystem.
                </Text>




              </Box>
              {showScrollButton &&
                (<Box
                  _dark={{ bgcolor: "#FFFFFF" }}
                  _ light={{ bgcolor: "#16171B" }}
                >
                  <Button alt=""
                    component="button"
                    onClick={handleScrollToTop}
                    id="myBtn"
                    title="Go to top"
                    width="91px"
                    height="30px"
                    flexShrink="0"
                    fill="#202020"
                    strokeWidth="1px"
                    style={{
                      position: 'fixed',
                      bottom: '80px',
                      right: '20px',
                      zIndex: '9999'
                    }}
                    _dark={{
                      color: "#191919",
                      bg: "#FFFF"
                    }}
                    _light={{
                      color: "#FFFF",
                      bg: "#191919"
                    }}
                  >
                    <TriangleUpIcon mr={"5px"} />
                    <Text fontSize={"10px"}>Back to Top</Text>

                  </Button>
                </Box>)
              }
            </Box>
          </Box>

          {/* mobile Optimized part */}
          <Box background={useColorModeValue("#E8E8E8", "#222")}
            display={{ base: "block", md: "none" }}>

            <Box layerStyle={"flexAlignCenterJustifyCenter"}>

              <Text
                fontSize={"36px"}
                fontWeight={400}
                lineHeight={"46px"}
                color={useColorModeValue("#191919", "#FFFFFF")}
                //padding={"20px 0px 0px 20px"} 
                ml={"20px"}
              >
                Approach Paper
              </Text>

              {/* <Box paddingRight={"100px"}> */}
              <Image h={40}
                w={40}
                src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")}
                alt=""></Image>
              {/* </Box> */}
            </Box>
          </Box>


          <Box width={"90%"}
            display={{ base: "block", md: "none" }}>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"}
                paddingTop={"10px"}>1. Abstract:</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>
                Decentralized Finance (DeFi) has gained significant traction in recent years. We believe that, in
                the future Decentralized Finance holds promise for it has the potential to democratize finance
                like never before; its potential is premised on its ability to comply with rules and regulations of
                the sovereign and its ability to continuously demonstrate that it does not intend to defraud the
                community that supports and nurtures it.<br /> <br />

                BetygFi is a comprehensive machine learning-based approach to assess DeFi protocols. The goal
                is to evolve a robust, real time, neutral, self-learning approach towards analyzing DeFi’s.<br /> <br />

                The model underpinning Betygfi currently analyses technical risk, centralization risk,
                financial/market risk, and userbase quality risks. The model currently leverages a combination
                of supervised and unsupervised learning techniques to enable classification of DeFi
                protocols/projects.</Text>
            </Box>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"}
                paddingTop={"10px"}>2. Data Collection and Processing</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>
                At the core of every machine learning model are dependable data sources/data sets, an
                efficient data pipeline, and dependable data normalization techniques. Solvendo, through its
                work in traditional finance understands the significance of a robust ETL (extraction,
                transformation and loading) methodology.<br /> <br />
                Below is a recital of the Datasets and Features that we collect, real-time, to train and evaluate
                our model. We currently compile data on the following features:</Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>2.1 Technical Risk</Heading>
                <Text padding={"10px 0px 0px 20px"}
                  fontSize={"14px"}>
                  • Time on Mainnet <br />
                  • Number of Critical Vulnerabilities <br />
                  • Public Audit <br />
                  • Recent Audit <br />
                  • Open Source <br />
                  • Byte Source code verified <br />
                  • Number of Engineers working <br />
                  • Number of code commits <br />
                  • Bounty Program</Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>2.2 Centralization Risk</Heading>
                <Text padding={"10px 0px 0px 20px"} fontSize={"14px"}>
                  • Protocol Administration <br />
                  • Private Key Model and arrangement <br />
                  • Oracles <br />
                  • Governance Token Concentration</Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>2.3 Financial/Market Risk</Heading>
                <Text padding={"10px 0px 0px 20px"}
                  fontSize={"14px"}>
                  • Collateralization Ratio <br />
                  • 30-day Exponential Moving Average (EMA) <br />
                  • Liquidity 30-day EMA <br />
                  • Total Value Locked (TVL) 30-day EMA  <br />
                  • Volume Weighted Average Price (VWAP)  <br />
                  • Relative Strength Index (RSI)  <br />
                  • Asset Breakdown </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>2.4 Userbase Quality</Heading>
                <Text padding={"10px 0px 0px 20px"}
                  fontSize={"14px"}>
                  • Repayment <br />
                  • Active Loans <br />
                  • Asset Quality <br />
                  • Asset Liquidation Threshold  </Text>
              </Box>
            </Box>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"} >3. Model Training Methodology</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>
                Our approach combines supervised and unsupervised machine learning techniques to derive a
                comprehensive scoring system for DeFi protocols. With reference to the ETL process mentioned
                above, currently we first preprocess data by normalizing features; then deal with the missing
                values and encode categorical variables. We thereafter perform the following steps:</Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"} >3.1 Unsupervised Learning</Heading>
                <Text paddingTop={"10px"}
                  fontSize={"14px"}
                  paddingLeft={"20px"}>
                  • Implement clustering algorithms (e.g., K-means, DBSCAN) to identify patterns and
                  group DeFi protocols based on their inherent risk characteristics. <br />
                  • Analyze the resulting clusters to derive insights into the risk profiles of different DeFi
                  protocols.  </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}>3.2 Supervised Learning</Heading>
                <Text paddingTop={"10px"}
                  fontSize={"14px"}
                  paddingLeft={"20px"}>
                  • Train classification models (e.g., Random Forest, Support Vector Machine, Neural
                  Networks) on a labeled dataset, where each DeFi protocol is assigned a risk score
                  based on expert opinion or historical performance. <br />
                  • Evaluate the performance of the classifiers using metrics such as accuracy, precision,
                  recall, and F1 score. <br />
                  • Optimize the best-performing model using techniques such as hyperparameter
                  tuning and feature selection. <br />
                </Text>
              </Box>
            </Box>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"}
                paddingTop={"10px"}>4. Model Evaluation:</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>
                After training and optimizing the model, we evaluate the model's performance on a test
                dataset. We use a myriad of approaches including comparing the model’s generated scores
                with actual performance. We also analyze feature importance to understand the key factors
                contributing to the risk profiles of DeFi protocols.</Text>
            </Box>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"}
                paddingTop={"10px"}>5. Scoring:</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>
                We truly believe that all the advances in machine learning including natural language
                processing (NLP) through foundation models, can best be utilized to navigate real world
                problems - by designing solutions that are binary but explainable. This approach enables users
                to understand and consume the output easily. This belief is at the core of Solvendo’s thesis and
                existence and is also reflected in the approach at BetygFi. <br />
                The Solvendo score that underpins the efforts at BetygFi is intended to enable users to
                understand at a glance, the risk reward profile of DeFi protocols to further enable informed
                decision making. As indicated above currently the score comprises an analysis of DeFi's
                technical, centralization, financial/market, and userbase quality risks.
              </Text>
            </Box>

            <Box padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              <Heading as="h1"
                fontSize={"22px"}
                paddingTop={"10px"}>6. Future:</Heading>
              <Text padding={"10px 0px 0px 20px"}
                fontSize={"14px"}>The model’s evolution will be reflected in the accuracy, predictive performance and therefore
                usefulness of the score. We have a broad outline of how we plan to train and evolve the model
                for the benefit of users and their better understanding of DeFi protocols/projects. <br />
                Keeping with our intention to continuously improve the accuracy and efficiency of the model,
                our ongoing efforts include as under:
              </Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>6.1 Feature Set Expansion:</Heading>
                <Text fontSize={"14px"}
                  padding={"10px 0px 10px 20px"}>
                  Additional features will continuously be included to enable a
                  comprehensive view of the risks associated with DeFi protocols. In our opinion, incorporating
                  data on protocol-specific features or emerging risks would enhance the model's performance.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>6.2 Real-Time Risk Assessment:</Heading>
                <Text fontSize={"14px"}
                  padding={"10px 0px 10px 20px"}>
                  It is our continuous pursuit to make our ETL process real time;
                  to enable us to integrate real time data into the model, thus to enable dynamic real time risk
                  assessment for DeFi protocols. We believe that such real time risk assessment would be a game
                  changer in risk assessment and management.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>6.3 Better Machine Learning Techniques: </Heading>
                <Text fontSize={"14px"}
                  padding={"10px 0px 10px 20px"}>
                  We continue to explore advancements in machine
                  learning. The space is fast evolving and is at the moment witnessing a gold rush. As a
                  consequence of these efforts, we expect promising first and second layer approaches and use
                  cases. For example, better deep learning or ensemble methods could potentially improve the
                  predictive performance of the model. Implementing recurrent neural networks (RNNs) or
                  4
                  transformers to analyze time-series data or using stacking techniques to combine the
                  predictions of multiple models could yield better results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>6.4 Explainable Results: </Heading>
                <Text fontSize={"14px"}
                  padding={"10px 0px 10px 20px"}>
                  Notwithstanding all of the benefits of machine learning, we anticipate
                  black box models will face significant challenges, as results and use cases from such models
                  become more mainstream. It is accepted that increase in complexity of the model makes it
                  more challenging to interpret, complexity also makes it difficult to understand the logic behind
                  the model's decisions. Implementing explainable AI techniques, such as Shapley Additive
                  Explanations (SHAP) values or Local Interpretable Model-agnostic Explanations (LIME), usually
                  help stakeholders better understand the underlying reasons behind the model's risk
                  assessments. It is our constant endeavor to deploy the best available tools to enable us to best
                  explain our efforts and results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Heading as="h2"
                  fontSize={"18px"}
                  paddingTop={"10px"}>6.5 Cross-Chain and Layer-2 Protocols: </Heading>

                <Text fontSize={"14px"}
                  padding={"10px 0px 80px 20px"}>
                  As the DeFi ecosystem continues to evolve, we expect
                  more cross-chain and layer-2 protocols to emerge. Incorporating these new technologies into
                  our risk assessment framework will be crucial to enable us to continue to provide a
                  comprehensive and up-to-date understanding of the DeFi landscape and associated risks. <br /><br />
                  Our approach is an attempt to explain transparently our value proposition and efforts. We hope
                  to continuously strive to enable actionable insights for stakeholders in the decentralized
                  financial ecosystem.
                </Text>

              </Box>
              {showScrollButton &&
                (<Box
                  _dark={{ bgcolor: "#FFFFFF" }}
                  _ light={{ bgcolor: "#16171B" }}
                >
                  <Button alt=""
                    mb={"5px"}
                    component="button"
                    onClick={handleScrollToTop}
                    id="myBtn"
                    title="Go to top"
                    width="70px"
                    height="30px"
                    flexShrink="0"
                    fill="#202020"
                    strokeWidth="1px"
                    style={{
                      position: 'fixed',
                      bottom: '80px',
                      right: '20px',
                      zIndex: '9999'
                    }}
                    _dark={{
                      color: "#191919",
                      bg: "#FFFF"
                    }}
                    _light={{
                      color: "#FFFF",
                      bg: "#191919"
                    }}
                  >
                    <TriangleUpIcon mr={"5px"} />
                    <Text fontSize={"9px"}>Back to Top</Text>

                  </Button>
                </Box>)
              }
            </Box>
          </Box>

        </Box>
      }
    </>
  )
};

export default Approach;