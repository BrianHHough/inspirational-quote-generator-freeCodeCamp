/* Amplify Params - DO NOT EDIT
	API_INSPIRATIONALQUOTES_GRAPHQLAPIIDOUTPUT
	API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_ARN
	API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// AWS packages
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

// Image generation packages
const sharp = require('sharp');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

// Function: update DynamoDB table
async function updateQuoteDDBObject() {
    const quoteTableName = process.env.API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_NAME;
    const quoteObjectID = "12232-234234-234234234-234234234";

    try {
        var quoteParams = {
            TableName: quoteTableName,
            Key: {
                "id": quoteObjectID,
            },
            UpdateExpression: "SET #quotesGenerated = #quotesGenerated + :inc",
            ExpressionAttributeValues: {
                ":inc": 1,
            },
            ExpressionAttributeNames: {
                "#quotesGenerated": "quotesGenerated",
            },
            ReturnValues: "UPDATED_NEW"
        };

        const updateQuoteObject = await docClient.update(quoteParams).promise();
        return updateQuoteObject;
    } catch (error) {
        console.log('error updating quote object in DynamoDB', error)
    }
}

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const apiURL = "https://zenquotes.io/api/random";

    // Function: Generate quote image
    async function getRandomQuote(apiURLInput) {
        // My quote is...
        let quoteText;
        // Author name here...
        let quoteAuthor;
      
        // Validate response to the api
        const response = await fetch(apiURLInput);
        var quoteData = await response.json();
        console.log(quoteData);
      
        // quote elements
        quoteText = quoteData[0].q;
        quoteAuthor = quoteData[0].a;
      
        // Image construction
        const width = 750;
        const height = 483;
        const text = quoteText;
        const words = text.split(" ");
        const lineBreak = 4;
        let newText = "";
      
        // Define some tspanElements w/ 4 words each
        let tspanElements = "";
        for (let i = 0; i < words.length; i++) {
          newText += words[i] + " ";
          if ((i + 1) % lineBreak === 0) {
            tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
            newText = "";
          }
        }
        if (newText !== "") {
          tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
        }
        console.log(tspanElements);
      
        // Construct the SVG
        const svgImage = `
          <svg width="${width}" height="${height}">
              <style>
                 .title { 
                   fill: #ffffff; 
                  font-size: 20px; 
                     font-weight: bold;
                }
               .quoteAuthorStyles {
                     font-size: 35px;
                    font-weight: bold;
                   padding: 50px;
              }
                .footerStyles {
                  font-size: 20px;
                     font-weight: bold;
                    fill: lightgrey;
                   text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)"/>
              <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill="white">"</text>
              <g>
                  <rect x="0" y="0" width="${width}" height="auto"></rect>
                     <text id="lastLineOfQuote" x="375" y="120" font-family="Verdana" font-size="35" fill="white" text-anchor="middle">
                        ${tspanElements}
                    <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>
               </text>
                </g>
              <text x="${width / 2}" y="${
          height - 10
        }" class="footerStyles">Developed by @BrianHHough | Quotes from ZenQuotes.io</text>
          </svg>
        `;
      
        //  Add background images for the svg creation
        const backgroundImages = [
          "backgrounds/Aubergine.png",
          "backgrounds/Mantle.png",
          "backgrounds/Midnight-City.png",
          "backgrounds/Orangey.png",
        ];
      
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const selectedBackgroundImage = backgroundImages[randomIndex];
      
        // Composite this image together
        const timestamp = new Date().toLocaleString().replace(/[^\d]/g, "");
        const svgBuffer = Buffer.from(svgImage);
        
        const imagePath = path.join('/tmp', 'quote-card.png');
        const image = await sharp(selectedBackgroundImage)
          .composite([
            {
              input: svgBuffer,
              top: 0,
              left: 0,
            },
          ])
          .toFile(imagePath);

          // Function: Update DynamoDB object in table
          try {
            updateQuoteDDBObject();
          } catch (error) {
            console.log('error updating quote object in DynamoDB', error)
          }

          return {
            statusCode: 200,
            //  Uncomment below to enable CORS requests
            headers: {
                "Content-Type": "image/png",
                "Access-Control-Allow-Origin": "*",
            }, 
            body: fs.readFileSync(imagePath).toString('base64'),
            isBase64Encoded: true,
        };
    }
    return await getRandomQuote(apiURL); 
};
