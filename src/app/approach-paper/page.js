"use client";
import {
  Box,
  Container,
  Image,
  useColorModeValue,
  Text,
  Heading,
  useColorMode,
  div,
  h1,
  h2,
  br,
  Flex,
  Button,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Approach = () => {
  const handleScrollToTop = () => {
    window !== undefined && window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { colorMode } = useColorMode();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {
        <Box maxW={"100%"} padding={"0px"}>
          <Box
            background={useColorModeValue("#E8E8E8", "#222")}
            display={{ base: "none", md: "block" }}
          >
            <Box layerStyle={"flexSpaceBetween"}>
              <Box padding={"90px 0px 0px 50px"}>
                <Text variant={"bigHeading2"}>Approach Paper</Text>
              </Box>
              <Box paddingRight={"100px"}>
                <Image
                  src={useColorModeValue(
                    "/images/bg-logo.png",
                    "/images/bg-logo-dark.png"
                  )}
                  alt=""
                ></Image>
              </Box>
            </Box>
          </Box>
          <Box width={"90%"} display={{ base: "none", md: "block" }}>
            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>1. Abstract:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                Decentralized Finance (DeFi) has gained significant traction in
                recent years. We believe that, in the future Decentralized
                Finance holds promise for it has the potential to democratize
                finance like never before; its potential is premised on its
                ability to comply with rules and regulations of the sovereign
                and its ability to continuously demonstrate that it does not
                intend to defraud the community that supports and nurtures it.
                <br />
                <br />
                BetygFi is a comprehensive machine learning-based approach to
                assess DeFi protocols. The goal is to evolve a robust, real
                time, neutral, self-learning approach towards analyzing DeFi’s.
                <br />
                <br />
                The model underpinning Betygfi currently analyses technical
                risk, centralization risk, financial/market risk, and userbase
                quality risks. The model currently leverages a combination of
                supervised and unsupervised learning techniques to enable
                classification of DeFi protocols/projects.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>
                2. Data Collection and Processing
              </Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                At the core of every machine learning model are dependable data
                sources/data sets, an efficient data pipeline, and dependable
                data normalization techniques. Solvendo, through its work in
                traditional finance understands the significance of a robust ETL
                (extraction, transformation and loading) methodology.
                <br />
                <br />
                Below is a recital of the Datasets and Features that we collect,
                real-time, to train and evaluate our model. We currently compile
                data on the following features:
              </Text>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>2.1 Technical Risk</Text>
                {/* <Text padding={"10px 0px 0px 20px"} variant={"content"}> */}
                <ul >
                  <li><Text variant={"content"}> Time on Mainnet</Text></li>
                  <li><Text variant={"content"}> Number of Critical Vulnerabilities</Text> </li>
                  <li><Text variant={"content"}> Public Audit </Text></li>
                  <li><Text variant={"content"}> Recent Audit</Text> </li>
                  <li><Text variant={"content"}> Open Source </Text></li>
                  <li><Text variant={"content"}> Byte Source code verified</Text> </li>
                  <li> <Text variant={"content"}>Number of Engineers working </Text></li>
                  <li><Text variant={"content"}> Number of code commits</Text> </li>
                  <li> <Text variant={"content"}>Bounty Program</Text> </li>
                </ul>
                {/* </Text> */}
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>2.2 Centralization Risk</Text>
                <ul >
                  <li>
                    {" "}
                    <Text variant={"content"}> Protocol Administration </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Private Key Model and arrangement
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>Oracles </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Governance Token Concentration
                    </Text>
                  </li>
                </ul>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  2.3 Financial/Market Risk
                </Text>
                <Box padding={"10px 0px 0px 40px"}>
                  <ul>
                    <li>
                      {" "}
                      <Text variant={"content"}>Collateralization Ratio</Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        30-day Exponential Moving Average (EMA)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>Liquidity 30-day EMA</Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        Volume Weighted Average Price (VWAP)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        Relative Strength Index (RSI)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>Asset Breakdown</Text>
                    </li>
                  </ul>
                </Box>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>2.4 Userbase Quality</Text>
                <ul >
                  <li>
                    {" "}
                    <Text variant={"content"}> Repayment </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}> Active Loans</Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>Asset Quality</Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Asset Liquidation Threshold
                    </Text>
                  </li>
                </ul>
              </Box>
            </Box>

            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>
                3. Model Training Methodology
              </Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                Our approach combines supervised and unsupervised machine
                learning techniques to derive a comprehensive scoring system for
                DeFi protocols. With reference to the ETL process mentioned
                above, currently we first preprocess data by normalizing
                features; then deal with the missing values and encode
                categorical variables. We thereafter perform the following
                steps:
              </Text>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  3.1 Unsupervised Learning
                </Text>
                <ul >
                  • Implement clustering algorithms (e.g., K-means, DBSCAN) to
                  identify patterns and group DeFi protocols based on their
                  inherent risk characteristics. <br />• Analyze the resulting
                  clusters to derive insights into the risk profiles of
                  different DeFi protocols.
                </ul>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>3.2 Supervised Learning</Text>
                <ul
                  paddingTop={"10px"}
                  variant={"content"}
                  paddingLeft={"50px"}
                >
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Train classification models (e.g., Random Forest, Support
                      Vector Machine, Neural Networks) on a labeled dataset,
                      where each DeFi protocol is assigned a risk score based on
                      expert opinion or historical performance.
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Evaluate the performance of the classifiers using metrics
                      such as accuracy, precision, recall, and F1 score.
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Optimize the best-performing model using techniques such
                      as hyperparameter tuning and feature selection.
                    </Text>{" "}
                  </li>
                </ul>
              </Box>
            </Box>

            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>4. Model Evaluation:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                After training and optimizing the model, we evaluate the model's
                performance on a test dataset. We use a myriad of approaches
                including comparing the model’s generated scores with actual
                performance. We also analyze feature importance to understand
                the key factors contributing to the risk profiles of DeFi
                protocols.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>5. Scoring:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                We truly believe that all the advances in machine learning
                including natural language processing (NLP) through foundation
                models, can best be utilized to navigate real world problems -
                by designing solutions that are binary but explainable. This
                approach enables users to understand and consume the output
                easily. This belief is at the core of Solvendo’s thesis and
                existence and is also reflected in the approach at BetygFi.
                <br />
                The Solvendo score that underpins the efforts at BetygFi is
                intended to enable users to understand at a glance, the risk
                reward profile of DeFi protocols to further enable informed
                decision making. As indicated above currently the score
                comprises an analysis of DeFi's technical, centralization,
                financial/market, and userbase quality risks.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 50px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>6. Future:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                The model’s evolution will be reflected in the accuracy,
                predictive performance and therefore usefulness of the score. We
                have a broad outline of how we plan to train and evolve the
                model for the benefit of users and their better understanding of
                DeFi protocols/projects.
                <br />
                Keeping with our intention to continuously improve the accuracy
                and efficiency of the model, our ongoing efforts include as
                under:
              </Text>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  6.1 Feature Set Expansion:
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 40px"}>
                  Additional features will continuously be included to enable a
                  comprehensive view of the risks associated with DeFi
                  protocols. In our opinion, incorporating data on
                  protocol-specific features or emerging risks would enhance the
                  model's performance.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  6.2 Real-Time Risk Assessment:
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 40px"}>
                  It is our continuous pursuit to make our ETL process real
                  time; to enable us to integrate real time data into the model,
                  thus to enable dynamic real time risk assessment for DeFi
                  protocols. We believe that such real time risk assessment
                  would be a game changer in risk assessment and management.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  6.3 Better Machine Learning Techniques:{" "}
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 40px"}>
                  We continue to explore advancements in machine learning. The
                  space is fast evolving and is at the moment witnessing a gold
                  rush. As a consequence of these efforts, we expect promising
                  first and second layer approaches and use cases. For example,
                  better deep learning or ensemble methods could potentially
                  improve the predictive performance of the model. Implementing
                  recurrent neural networks (RNNs) or 4 transformers to analyze
                  time-series data or using stacking techniques to combine the
                  predictions of multiple models could yield better results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  6.4 Explainable Results:{" "}
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 40px"}>
                  Notwithstanding all of the benefits of machine learning, we
                  anticipate black box models will face significant challenges,
                  as results and use cases from such models become more
                  mainstream. It is accepted that increase in complexity of the
                  model makes it more challenging to interpret, complexity also
                  makes it difficult to understand the logic behind the model's
                  decisions. Implementing explainable AI techniques, such as
                  Shapley Additive Explanations (SHAP) values or Local
                  Interpretable Model-agnostic Explanations (LIME), usually help
                  stakeholders better understand the underlying reasons behind
                  the model's risk assessments. It is our constant endeavor to
                  deploy the best available tools to enable us to best explain
                  our efforts and results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 70px"}>
                <Text variant={"contentHeading6"}>
                  6.5 Cross-Chain and Layer-2 Protocols:{" "}
                </Text>
                <Text variant={"content"} padding={"10px 0px 80px 40px"}>
                  As the DeFi ecosystem continues to evolve, we expect more
                  cross-chain and layer-2 protocols to emerge. Incorporating
                  these new technologies into our risk assessment framework will
                  be crucial to enable us to continue to provide a comprehensive
                  and up-to-date understanding of the DeFi landscape and
                  associated risks.
                  <br />
                  <br />
                  Our approach is an attempt to explain transparently our value
                  proposition and efforts. We hope to continuously strive to
                  enable actionable insights for stakeholders in the
                  decentralized financial ecosystem.
                </Text>
              </Box>
              {showScrollButton === true && (
                <Box
                  _dark={{ bgcolor: "#FFFFFF" }}
                  _
                  light={{ bgcolor: "#16171B" }}
                >
                  <Button
                    alt=""
                    mb={"5px"}
                    component="button"
                    onClick={handleScrollToTop}
                    id="myBtn"
                    height="30px"
                    flexShrink="0"
                    style={{
                      position: "fixed",
                      bottom: "80px",
                      right: "20px",
                      zIndex: "9999",
                    }}
                    _dark={{
                      color: "#191919",
                      bg: "#FFFF",
                    }}
                    _light={{
                      color: "#FFFF",
                      bg: "#191919",
                    }}
                  >
                    <TriangleUpIcon mr={"5px"} />
                    <Text fontSize={"9px"}>Back to Top</Text>
                  </Button>
                </Box>
              )}
            </Box>
          </Box>

          {/* mobile Optimized part */}
          <Box
            background={useColorModeValue("#E8E8E8", "#222")}
            display={{ base: "block", md: "none" }}
          >
            <Box layerStyle={"spaceBetween"}>
              <Text variant={"bigHeading2"} ml={"20px"}>
                Approach Paper
              </Text>
              <Image
                h={40}
                w={40}
                src={useColorModeValue(
                  "/images/bg-logo.png",
                  "/images/bg-logo-dark.png"
                )}
                alt=""
              ></Image>
            </Box>
          </Box>
          <Box width={"90%"} display={{ base: "block", md: "none" }}>
            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>1. Abstract:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                Decentralized Finance (DeFi) has gained significant traction in
                recent years. We believe that, in the future Decentralized
                Finance holds promise for it has the potential to democratize
                finance like never before; its potential is premised on its
                ability to comply with rules and regulations of the sovereign
                and its ability to continuously demonstrate that it does not
                intend to defraud the community that supports and nurtures it.
                <br />
                <br />
                BetygFi is a comprehensive machine learning-based approach to
                assess DeFi protocols. The goal is to evolve a robust, real
                time, neutral, self-learning approach towards analyzing DeFi’s.
                <br />
                <br />
                The model underpinning Betygfi currently analyses technical
                risk, centralization risk, financial/market risk, and userbase
                quality risks. The model currently leverages a combination of
                supervised and unsupervised learning techniques to enable
                classification of DeFi protocols/projects.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>
                2. Data Collection and Processing
              </Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                At the core of every machine learning model are dependable data
                sources/data sets, an efficient data pipeline, and dependable
                data normalization techniques. Solvendo, through its work in
                traditional finance understands the significance of a robust ETL
                (extraction, transformation and loading) methodology.
                <br />
                <br />
                Below is a recital of the Datasets and Features that we collect,
                real-time, to train and evaluate our model. We currently compile
                data on the following features:
              </Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>2.1 Technical Risk</Text>
                <ul >
                  <li><Text variant={"content"}> Time on Mainnet</Text></li>
                  <li><Text variant={"content"}> Number of Critical Vulnerabilities</Text> </li>
                  <li><Text variant={"content"}> Public Audit </Text></li>
                  <li><Text variant={"content"}> Recent Audit</Text> </li>
                  <li><Text variant={"content"}> Open Source </Text></li>
                  <li><Text variant={"content"}> Byte Source code verified</Text> </li>
                  <li> <Text variant={"content"}>Number of Engineers working </Text></li>
                  <li><Text variant={"content"}> Number of code commits</Text> </li>
                  <li> <Text variant={"content"}>Bounty Program</Text> </li>
                </ul>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>2.2 Centralization Risk</Text>
                <ul >
                  <li>
                    {" "}
                    <Text variant={"content"}> Protocol Administration </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Private Key Model and arrangement
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>Oracles </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Governance Token Concentration
                    </Text>
                  </li>
                </ul>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  2.3 Financial/Market Risk
                </Text>
                <ul>
                    <li>
                      {" "}
                      <Text variant={"content"}>Collateralization Ratio</Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        30-day Exponential Moving Average (EMA)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>Liquidity 30-day EMA</Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        Volume Weighted Average Price (VWAP)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>
                        Relative Strength Index (RSI)
                      </Text>
                    </li>
                    <li>
                      {" "}
                      <Text variant={"content"}>Asset Breakdown</Text>
                    </li>
                  </ul>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>2.4 Userbase Quality</Text>
                <ul >
                  <li>
                    {" "}
                    <Text variant={"content"}> Repayment </Text>
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}> Active Loans</Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>Asset Quality</Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Asset Liquidation Threshold
                    </Text>
                  </li>
                </ul>
              </Box>
            </Box>

            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>
                3. Model Training Methodology
              </Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                Our approach combines supervised and unsupervised machine
                learning techniques to derive a comprehensive scoring system for
                DeFi protocols. With reference to the ETL process mentioned
                above, currently we first preprocess data by normalizing
                features; then deal with the missing values and encode
                categorical variables. We thereafter perform the following
                steps:
              </Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  3.1 Unsupervised Learning
                </Text>
                <ul >
                  • Implement clustering algorithms (e.g., K-means, DBSCAN) to
                  identify patterns and group DeFi protocols based on their
                  inherent risk characteristics. <br />• Analyze the resulting
                  clusters to derive insights into the risk profiles of
                  different DeFi protocols.
                </ul>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>3.2 Supervised Learning</Text>
                <ul
                  paddingTop={"10px"}
                  variant={"content"}
                  paddingLeft={"50px"}
                >
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Train classification models (e.g., Random Forest, Support
                      Vector Machine, Neural Networks) on a labeled dataset,
                      where each DeFi protocol is assigned a risk score based on
                      expert opinion or historical performance.
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      {" "}
                      Evaluate the performance of the classifiers using metrics
                      such as accuracy, precision, recall, and F1 score.
                    </Text>{" "}
                  </li>
                  <li>
                    {" "}
                    <Text variant={"content"}>
                      Optimize the best-performing model using techniques such
                      as hyperparameter tuning and feature selection.
                    </Text>{" "}
                  </li>
                </ul>
              </Box>
            </Box>

            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>4. Model Evaluation:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                After training and optimizing the model, we evaluate the model's
                performance on a test dataset. We use a myriad of approaches
                including comparing the model’s generated scores with actual
                performance. We also analyze feature importance to understand
                the key factors contributing to the risk profiles of DeFi
                protocols.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>5. Scoring:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                We truly believe that all the advances in machine learning
                including natural language processing (NLP) through foundation
                models, can best be utilized to navigate real world problems -
                by designing solutions that are binary but explainable. This
                approach enables users to understand and consume the output
                easily. This belief is at the core of Solvendo’s thesis and
                existence and is also reflected in the approach at BetygFi.
                <br />
                The Solvendo score that underpins the efforts at BetygFi is
                intended to enable users to understand at a glance, the risk
                reward profile of DeFi protocols to further enable informed
                decision making. As indicated above currently the score
                comprises an analysis of DeFi's technical, centralization,
                financial/market, and userbase quality risks.
              </Text>
            </Box>

            <Box
              padding={"29px 0px 0px 20px"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              <Text variant={"contentHeading5"}>6. Future:</Text>
              <Text padding={"10px 0px 0px 20px"} variant={"content"}>
                The model’s evolution will be reflected in the accuracy,
                predictive performance and therefore usefulness of the score. We
                have a broad outline of how we plan to train and evolve the
                model for the benefit of users and their better understanding of
                DeFi protocols/projects.
                <br />
                Keeping with our intention to continuously improve the accuracy
                and efficiency of the model, our ongoing efforts include as
                under:
              </Text>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  6.1 Feature Set Expansion:
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 20px"}>
                  Additional features will continuously be included to enable a
                  comprehensive view of the risks associated with DeFi
                  protocols. In our opinion, incorporating data on
                  protocol-specific features or emerging risks would enhance the
                  model's performance.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  6.2 Real-Time Risk Assessment:
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 20px"}>
                  It is our continuous pursuit to make our ETL process real
                  time; to enable us to integrate real time data into the model,
                  thus to enable dynamic real time risk assessment for DeFi
                  protocols. We believe that such real time risk assessment
                  would be a game changer in risk assessment and management.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  6.3 Better Machine Learning Techniques:{" "}
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 20px"}>
                  We continue to explore advancements in machine learning. The
                  space is fast evolving and is at the moment witnessing a gold
                  rush. As a consequence of these efforts, we expect promising
                  first and second layer approaches and use cases. For example,
                  better deep learning or ensemble methods could potentially
                  improve the predictive performance of the model. Implementing
                  recurrent neural networks (RNNs) or 4 transformers to analyze
                  time-series data or using stacking techniques to combine the
                  predictions of multiple models could yield better results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  6.4 Explainable Results:{" "}
                </Text>
                <Text variant={"content"} padding={"10px 0px 10px 20px"}>
                  Notwithstanding all of the benefits of machine learning, we
                  anticipate black box models will face significant challenges,
                  as results and use cases from such models become more
                  mainstream. It is accepted that increase in complexity of the
                  model makes it more challenging to interpret, complexity also
                  makes it difficult to understand the logic behind the model's
                  decisions. Implementing explainable AI techniques, such as
                  Shapley Additive Explanations (SHAP) values or Local
                  Interpretable Model-agnostic Explanations (LIME), usually help
                  stakeholders better understand the underlying reasons behind
                  the model's risk assessments. It is our constant endeavor to
                  deploy the best available tools to enable us to best explain
                  our efforts and results.
                </Text>
              </Box>

              <Box padding={"29px 0px 0px 15px"}>
                <Text variant={"contentHeading6"}>
                  6.5 Cross-Chain and Layer-2 Protocols:{" "}
                </Text>

                <Text variant={"content"} padding={"10px 0px 80px 20px"}>
                  As the DeFi ecosystem continues to evolve, we expect more
                  cross-chain and layer-2 protocols to emerge. Incorporating
                  these new technologies into our risk assessment framework will
                  be crucial to enable us to continue to provide a comprehensive
                  and up-to-date understanding of the DeFi landscape and
                  associated risks.
                  <br />
                  <br />
                  Our approach is an attempt to explain transparently our value
                  proposition and efforts. We hope to continuously strive to
                  enable actionable insights for stakeholders in the
                  decentralized financial ecosystem.
                </Text>
              </Box>
              {showScrollButton === true && (
                <Box
                  _dark={{ bgcolor: "#FFFFFF" }}
                  _
                  light={{ bgcolor: "#16171B" }}
                >
                  <Button
                    alt=""
                    mb={"5px"}
                    component="button"
                    onClick={handleScrollToTop}
                    id="myBtn"
                    height="30px"
                    flexShrink="0"
                    style={{
                      position: "fixed",
                      bottom: "80px",
                      right: "20px",
                      zIndex: "9999",
                    }}
                    _dark={{
                      color: "#191919",
                      bg: "#FFFF",
                    }}
                    _light={{
                      color: "#FFFF",
                      bg: "#191919",
                    }}
                  >
                    <TriangleUpIcon mr={"5px"} />
                    <Text fontSize={"9px"}>Back to Top</Text>
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      }
    </>
  );
};

export default Approach;
