export const LaunchPlatformButtonText = "Launch Platform";


export const featuresArray = [
  {
    name: "Exclusive Features",
    featureList: [
      "We gather and combine data independently.",
      "We track data for over 14,000 cryptocurrencies like Bitcoin and Ethereum across more than 1,000 exchanges such as Binance, Crypto.com, and Kraken.",
      "We monitor data for over 2 million tokens across 100+ blockchain networks and 500+ decentralized exchanges."
    ],
    turn: false,
    sideBoxImg: "/images/sidebox_img_1.svg"
  },
  {
    name: "Reliable",
    featureList: [
      "Our team of cryptocurrency experts has been working since early 2014 to provide top-notch data.",
      "We have a 99.9% uptime record.",
      "We've been tested by industry collaborations and use our own products extensively.",
      "Our support team operates 24/7 to ensure timely updates."
    ],
    turn: true,
    sideBoxImg: "/images/sidebox_img_2.svg"
  },
  {
    name: "Comprehensive",
    featureList: [
      "Everything you need is right at your fingertips.",
      "We offer over 70+ different ways to access our data, with more coming soon.",
      "We provide real-time and historical data across all cryptocurrency categories.",
      "Our NFT Data API lets you track market data for NFT collections.",
      "You can also access on-chain decentralized exchange data for cryptocurrencies that aren't listed on CoinGecko."
    ],
    turn: false,
    sideBoxImg: "/images/sidebox_img_3.svg"
  }
];



export const NumbersDataArray = [
  {
    name: 'Data From Tokens',
    value: "2M+",
    icon: "numbers_icon_1"
  },
  {
    name: 'Blockchain Networks',
    value: "100+",
    icon: "numbers_icon_2"
  },
  {
    name: 'Decentralized Exchanges',
    value: "500+",
    icon: "numbers_icon_3"
  },
];

export const PrivateKeyUses = [
  {
    icon: "private_key_use_1",
    name: "Optimize Your Strategies",
    para: "Utilize comprehensive crypto data to backtest and refine your trading strategies. Access data from hundreds of exchanges and thousands of coins for a complete view. Our Enterprise plan offers historical data since 2013, ensuring full visibility."
  },
  {
    icon: "private_key_use_2",
    name: "Display Accurate Data",
    para: "Ensure your users access the most reliable market data through our API. Ideal for developing wallets, portfolio management tools, and media offerings, our data is both advanced and up-to-date, ensuring your product stands out."
  },
  {
    icon: "private_key_use_3",
    name: "Outperform Competitors",
    para: "Gain a competitive edge with our market data. By analyzing current and historical pricing, volume, and exchange information, you can make strategic decisions to stay ahead in the market."
  },
  {
    icon: "private_key_use_4",
    name: "Conduct In-Depth Experiments",
    para: "Our powerful and flexible API allows you to create your own models and run experiments. Whether for professional development or personal curiosity, our data will help you derive meaningful insights and conclusions."
  },
];


export const BuildSteps = [
  {
    name: "Get your API key",
    para: "Apply and get your unique API key to access our extensive cryptocurrency data, tracking over 10,000 token.",
    icon: "build_step_1"
  },
  {
    name: "Develop the code",
    para: "Utilize our comprehensive API documentation to integrate real-time and historical data into your application, ensuring seamless functionality and accuracy.",
    icon: "build_step_2"
  },
  {
    name: "Launch into production",
    para: "Deploy your application with confidence, backed by our 99.9% uptime record and 24/7 expert support for ongoing reliability and performance.",
    icon: "build_step_3"
  },
];


export const codeSnippets = {
  cURL: `curl -X GET "https://api.betygfi.com/v1/cryptocurrency/listings/latest" -H "X-BET_API_KEY: BET"`,
  NodeJs: `const axios = require('axios');
  
  let response = null;
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get('https://api.betygfi.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-BET_API_KEY': 'BET',
        },
      });
    } catch(ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      console.log(json);
      resolve(json);
    }
  });`,
  Python: `import requests
  
  try:
      response = requests.get('https://api.betygfi.com/v1/cryptocurrency/listings/latest', headers={
          'X-BET_API_KEY': 'BET'
      })
      response.raise_for_status()
      json = response.json()
      print(json)
  except requests.exceptions.RequestException as ex:
      print(ex)`,
  PHP: `<?php
  $curl = curl_init();
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.betygfi.com/v1/cryptocurrency/listings/latest",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "X-BET_API_KEY: BET"
    ),
  ));
  
  $response = curl_exec($curl);
  $err = curl_error($curl);
  
  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }`,
  Java: `import java.net.HttpURLConnection;
  import java.net.URL;
  import java.io.BufferedReader;
  import java.io.InputStreamReader;
  
  public class Main {
    public static void main(String[] args) {
      try {
        URL url = new URL("https://api.betygfi.com/v1/cryptocurrency/listings/latest");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("X-BET_API_KEY", "BET");
  
        int status = con.getResponseCode();
        if (status == 200) {
          BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
          String inputLine;
          StringBuffer content = new StringBuffer();
          while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
          }
          in.close();
          System.out.println(content.toString());
        } else {
          System.out.println("Error: " + status);
        }
        con.disconnect();
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
  }`,
  GO: `package main
  
  import (
    "fmt"
    "net/http"
    "io/ioutil"
  )
  
  func main() {
    client := &http.Client{}
    req, err := http.NewRequest("GET", "https://api.betygfi.com/v1/cryptocurrency/listings/latest", nil)
    if err != nil {
      fmt.Println(err)
      return
    }
    req.Header.Add("X-BET_API_KEY", "BET")
  
    resp, err := client.Do(req)
    if err != nil {
      fmt.Println(err)
      return
    }
    defer resp.Body.Close()
  
    if resp.StatusCode == http.StatusOK {
      body, err := ioutil.ReadAll(resp.Body)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(string(body))
    } else {
      fmt.Println("Error:", resp.Status)
    }
  }`
};
export const languageModes = {
  cURL: 'json',
  NodeJs: 'javascript',
  Python: 'python',
  PHP: 'php',
  Java: 'java',
  GO: 'golang'
};