// // // // const express = require('express');
// // // import OpenAI from "openai";
// // // import sharp from "sharp";
// // // import fs from "fs";
// // // const openai = new OpenAI();

// // // // const completion = await openai.chat.completions.create({
// // // //     model: "gpt-4o-mini",
// // // //     messages: [
// // // //         { role: "system", content: "You are a helpful assistant." },
// // // //         {
// // // //             role: "user",
// // // //             content: "Who is the best basketball player of all time?",
// // // //         },
// // // //     ],
// // // // });

// // // // console.log(completion.choices[0].message);



// // // // async function main() {
// // // //   const file = await openai.files.create({
// // // //     file: fs.createReadStream("./demo.png"),
// // // //     purpose: "fine-tune",
// // // //   });

// // // //   console.log(file);
// // // // }

// // // // main();


// // // // // 
// // // // async function uploadAndDescribeImage() {
// // // //     try {
// // // //       // Step 1: Upload the image file
// // // //       const filePath = "./demo.png"; // Replace with your image file path
// // // //       const file = await openai.files.create({
// // // //         file: fs.createReadStream(filePath),
// // // //         purpose: "vision", // Purpose depends on your use case
// // // //       });
  
// // // //       console.log("File Uploaded:", file);
  
// // // //       // Step 2: Use the uploaded file for further processing
// // // //       // OpenAI might release Vision APIs or GPT models that support this functionality
// // // //       const response = await openai.chat.completions.create({
// // // //         model: "gpt-4o-mini",
// // // //         messages: [
// // // //           {
// // // //             role: "system",
// // // //             content: "You are an assistant that can interpret uploaded files.",
// // // //           },
// // // //           {
// // // //             role: "user",
// // // //             content: `I have uploaded a file. The file ID is: ${file.id}. Can you describe the content of this file?`,
// // // //           },
// // // //         ],
// // // //       });
  
// // // //       console.log("Image Analysis Result:", response.choices[0].message.content);
// // // //     } catch (error) {
// // // //       console.error("Error uploading or describing the image:", error);
// // // //     }
// // // //   }
  
// // // //   uploadAndDescribeImage();

// // // // import base64
// // // // from openai import OpenAI

// // // // client = OpenAI()

// // // // // # Function to encode the image
// // // // def encode_image(image_path):
// // // //     with open(image_path, "rb") as image_file:
// // // //         return base64.b64encode(image_file.read()).decode("utf-8")


// // // // // # Path to your image
// // // // image_path = "path_to_your_image.jpg"

// // // // // # Getting the base64 string
// // // // base64_image = encode_image(image_path)

// // // // response = client.chat.completions.create(
// // // //     model="gpt-4o-mini",
// // // //     messages=[
// // // //         {
// // // //             "role": "user",
// // // //             "content": [
// // // //                 {
// // // //                     "type": "text",
// // // //                     "text": "What is in this image?",
// // // //                 },
// // // //                 {
// // // //                     "type": "image_url",
// // // //                     "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
// // // //                 },
// // // //             ],
// // // //         }
// // // //     ],
// // // // )

// // // // print(response.choices[0])


// // // // Function to encode the image in Base64
// // // async function encodeImage(imagePath, outputPath) {
// // //     await sharp(imagePath)
// // //         .resize(512) // Resize to 512px width (adjust as needed)
// // //         .jpeg({ quality: 80 }) // Compress to reduce size
// // //         .toFile(outputPath);
// // //     const imageBuffer = fs.readFileSync(outputPath);
// // //     return imageBuffer.toString("base64");
// // //   }
  
// // //   // Path to your image
// // //   const imagePath = "./demo.png"; // Replace with the correct image path
  
// // //   // Getting the Base64-encoded string of the image
// // //   const base64Image = encodeImage(imagePath);
  
// // //   async function analyzeImage() {
// // //     try {
// // //       const response = await openai.chat.completions.create({
// // //         model: "gpt-4o", // Use the appropriate model
// // //         messages: [
// // //           {
// // //             role: "user",
// // //             content: JSON.stringify([
// // //               {
// // //                 type: "text",
// // //                 text: "What is in this image?",
// // //               },
// // //               {
// // //                 type: "image_url",
// // //                 image_url: { url: `data:image/jpeg;base64,${base64Image}` },
// // //               },
// // //             ]),
// // //           },
// // //         ],
// // //       });
  
// // //       console.log("Response:", response.choices[0].message.content);
// // //     } catch (error) {
// // //       console.error("Error analyzing the image:", error);
// // //     }
// // //   }
  
// // //   analyzeImage();


// // // // const app = express ();
// // // // app.use(express.json());


// // // // const PORT = process.env.PORT || 3000;

// // // // app.listen(PORT, () => {
// // // //     console.log("Server Listening on PORT:", PORT);
// // // //   });

// // // // //   response.send(status) 
// // // // //   is now a function that takes the JSON object as the argument.

// // // // app.get("/status", (request, response) => {
// // // //    const status = {
// // // //       "Status": "Running"
// // // //    };
   
// // // //    response.send(status);
// // // // });

// 9009090099999999999999999999999999999999999999999999

// import sharp from "sharp";
// import fs from "fs";
// import OpenAI from "openai";

// const openai = new OpenAI();

// // Function to encode the image in Base64
// async function encodeImage(imagePath, outputPath) {
//   try {
//     // Resize and compress the image
//     await sharp(imagePath)
//       .resize(512) // Resize to 512px width (adjust as needed)
//       .jpeg({ quality: 80 }) // Compress to reduce size
//       .toFile(outputPath);

//     // Read the resized image and convert to Base64
//     const imageBuffer = fs.readFileSync(outputPath);
//     return imageBuffer.toString("base64");
//   } catch (error) {
//     console.error("Error encoding image:", error);
//     throw error;
//   }
// }

// // Path to your input and output images
// const inputImagePath = "./demo.png"; // Replace with your image path
// const outputImagePath = "./resized_image.png"; // Path for the resized image

// async function analyzeImage() {
//   try {
//     // Get the Base64-encoded image
//     const base64Image = await encodeImage(inputImagePath, outputImagePath);

//     // Use the Base64 image in the OpenAI request
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // Use the appropriate model
//     //   messages: [
//     //     {
//     //       role: "user",
//     //       content: JSON.stringify([
//     //         {
//     //           type: "text",
//     //           text: "Give Me Details of this Image?",
//     //         },
//     //         {
//     //           type: "image_url",
//     //           image_url: { url: `data:image/jpeg;base64,${base64Image}` },
//     //         },
//     //       ]),
//     //     },
//     //   ],
//     messages: [
//         {
//           role: "user",
//           content: [
//             { type: "text", text: "give me details?" },
//             {
//               type: "image_url",
//               image_url: {
//                 "url": `data:image/jpeg;base64,${base64Image}`,
//               },
//             },
//           ],
//         },
//       ],
//     });

//     console.log("Response:", response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error analyzing the image:", error);
//   }
// }

// // Start the analysis
// analyzeImage();

// =======================================================

// import NodeWebcam from "node-webcam";
// import sharp from "sharp";
// import fs from "fs";
// import OpenAI from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: "your-openai-api-key", // Replace with your OpenAI API key
// });

// // Configure Webcam options
// const webcamOptions = {
//   width: 1280,
//   height: 720,
//   quality: 100,
//   delay: 0,
//   saveShots: true,
//   output: "jpeg",
//   device: false,
//   callbackReturn: "location",
//   verbose: false,
// };

// const Webcam = NodeWebcam.create(webcamOptions);

// // Function to capture an image using the webcam
// async function captureImage() {
//   return new Promise((resolve, reject) => {
//     Webcam.capture("webcam_image", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// }

// // Function to resize and compress the captured image
// async function processImage(inputPath, outputPath) {
//   await sharp(inputPath)
//     .resize(512) // Resize to 512px width
//     .jpeg({ quality: 80 }) // Compress to reduce size
//     .toFile(outputPath);
// }

// // Function to encode the image in Base64
// function encodeImageToBase64(filePath) {
//   const imageBuffer = fs.readFileSync(filePath);
//   return imageBuffer.toString("base64");
// }

// // Main function to capture, process, and analyze the image
// async function analyzeImage() {
//   try {
//     console.log("Capturing image...");
//     const capturedImagePath = await captureImage(); // Path to captured image
//     console.log("Captured image saved to:", capturedImagePath);
//     const resizedImagePath = "./resized_webcam_image.jpg"; // Output path for resized image

//     console.log("Processing image...");
//     await processImage(capturedImagePath, resizedImagePath);

//     console.log("Encoding image to Base64...");
//     const base64Image = encodeImageToBase64(resizedImagePath);

//     console.log("Sending image to OpenAI...");
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "user",
//           content: JSON.stringify([
//             {
//               type: "text",
//               text: "What is in this image?",
//             },
//             {
//               type: "image_url",
//               image_url: { url: `data:image/jpeg;base64,${base64Image}` },
//             },
//           ]),
//         },
//       ],
//     });

//     console.log("Response:", response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Start the image analysis process
// analyzeImage();


// import NodeWebcam from "node-webcam";
// import sharp from "sharp";
// import fs from "fs";
// import OpenAI from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: "your-openai-api-key", // Replace with your OpenAI API key
// });

// // Webcam Configuration
// const webcamOptions = {
//   width: 1280,
//   height: 720,
//   quality: 100,
//   delay: 0,
//   saveShots: true,
//   output: "jpeg", // Ensure output is in a supported format
//   device: false,
//   callbackReturn: "location",
//   verbose: false,
// };

// const Webcam = NodeWebcam.create(webcamOptions);

// // Function to capture an image using the webcam
// async function captureImage() {
//   return new Promise((resolve, reject) => {
//     Webcam.capture("webcam_image",  { output: "jpeg" },(err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data); // Resolve the path to the captured image
//       }
//     });
//   });
// }

// // Function to process the captured image
// async function processImage(inputPath, outputPath) {
//   try {
//     await sharp(inputPath)
//       .toFormat("jpeg") // Convert to supported format
//       .resize(512) // Resize to 512px width
//       .jpeg({ quality: 80 }) // Compress
//       .toFile(outputPath);
//     console.log("Image processed successfully!");
//   } catch (error) {
//     console.error("Error processing image with sharp:", error);
//     throw error;
//   }
// }

// // Function to encode the image in Base64
// function encodeImageToBase64(filePath) {
//   const imageBuffer = fs.readFileSync(filePath);
//   return imageBuffer.toString("base64");
// }

// // Main function
// async function analyzeImage() {
//   try {
//     console.log("Capturing image...");
//     const capturedImagePath = await captureImage(); // Path to captured image
//     console.log("Captured image saved to:", capturedImagePath)
//     const resizedImagePath = "./resized_webcam_image.jpg"; // Output path for resized image

//     console.log("Processing image...");
//     await processImage(capturedImagePath, resizedImagePath);

//     console.log("Encoding image to Base64...");
//     const base64Image = encodeImageToBase64(resizedImagePath);

//     console.log("Sending image to OpenAI...");
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "user",
//           content: JSON.stringify([
//             {
//               type: "text",
//               text: "What is in this image?",
//             },
//             {
//               type: "image_url",
//               image_url: { url: `data:image/jpeg;base64,${base64Image}` },
//             },
//           ]),
//         },
//       ],
//     });

//     console.log("Response:", response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error analyzing the image:", error);
//   }
// }

// analyzeImage();


// import NodeWebcam from "node-webcam";
// import sharp from "sharp";
// import fs from "fs";
// import OpenAI from "openai";

// // Initialize OpenAI client
// const openai = new OpenAI();

// // Webcam Configuration
// const webcamOptions = {
//   width: 1280,
//   height: 720,
//   quality: 100,
//   delay: 0,
//   saveShots: true,
//   output: "png", // Ensure output is in a supported format
//   device: false,
//   callbackReturn: "location",
//   verbose: true,
// };

// const Webcam = NodeWebcam.create(webcamOptions);

// // Function to capture an image using the webcam
// async function captureImage() {
//     return new Promise((resolve, reject) => {
//       Webcam.capture("webcam_image", (err, data) => {
//         if (err) {
//           console.error("Error capturing image:", err);
//           reject(err);
//         } else {
//           console.log("Captured image path:", data);
//           resolve(data); // Resolve the path to the captured image
//         }
//       });
//     });
//   }
  

// // Function to process the captured image
// async function processImage(inputPath, outputPath) {
//   try {
//     // Read the image file
//     console.log("inputPath",inputPath)
//     await sharp(inputPath)
//       .toFormat("png") // Convert to supported format
//       .resize(256) // Resize to 512px width
//       .jpeg({ quality: 50 }) // Compress
//       .toFile(outputPath);
//     console.log("Image processed successfully!");
//   } catch (error) {
//     console.error("Error processing image with sharp:", error);
//     throw error;
//   }
// }

// // Function to encode the image in Base64
// function encodeImageToBase64(filePath) {
//   const imageBuffer = fs.readFileSync(filePath);
//   return imageBuffer.toString("base64");
// }

// // Main function
// async function analyzeImage() {
//   try {
//     console.log("Capturing image...");
//     const capturedImagePath = await captureImage(); // Path to captured image
//     console.log("Captured image saved to:", capturedImagePath);
//     const resizedImagePath = "./resized_webcam_image.png"; // Output path for resized image

//     console.log("Processing image...");
//     await processImage(capturedImagePath, resizedImagePath);

//     console.log("Encoding image to Base64...");
//     const base64Image = encodeImageToBase64(resizedImagePath);

//     console.log("Sending image to OpenAI...");
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: JSON.stringify([
//             {
//               type: "text",
//               text: "What is in this image?",
//             },
//             {
//               type: "image_url",
//               image_url: { url: `data:image/jpeg;base64,${base64Image}` },
//             },
//           ]),
//         },
//       ],
//     });

//     console.log("Response:", response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error analyzing the image:", error);
//   }
// }

// analyzeImage();




// ----------------------------------------------
import NodeWebcam from "node-webcam";
import sharp from "sharp";
import fs from "fs";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI();

// Webcam Configuration
const webcamOptions = {
  width: 1280,
  height: 720,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: "jpg", // Ensure output is in a supported format
  device: false,
  callbackReturn: "location",
  verbose: true,
};

const Webcam = NodeWebcam.create(webcamOptions);

// async function captureImage() {
//   return new Promise((resolve, reject) => {
//     let filename = "webcam_image.jpg"
//     Webcam.capture(filename, (err, data) => {
//       if (err) {
//         console.error("Error capturing image:", err);
//         reject(err);
//       } else {
//         console.log("Captured image path:", data);
//         sharp(data)
//           .withMetadata({
//             exif: {
//               IFD0: {
//                 Copyright: "Your Name",
//                 Artist: "Node.js Webcam Capture",
//               },
//             },
//           })
//           .toFile(`${"webcam_image.jpg".replace(".jpg", "_metadata.jpg")}`, (err, info) => {
//             if (err) {
//               console.error("Error adding metadata:", err);
//               reject(new Error("Failed to add metadata"));
//             } else {
//               console.log("Metadata added and saved to:", info);
//               resolve(info);
//             }
//           }); // Resolve the path to the captured image
//       }
//     });
//   });
// }

// Function to capture an image using the webcam
async function captureImage() {
  return new Promise((resolve, reject) => {
    Webcam.capture("webcam_image.jpg", (err, data) => {
      if (err) {
        console.error("Error capturing image:", err);
        reject(err);
      } else {
        console.log("Captured image path:", data);
        resolve(data); // Resolve the path to the captured image
      }
    });
  });
}

// Unified Function: Resize, Compress, and Encode Image in Base64
async function encodeImage(imagePath, outputPath) {
  try {
    // Resize and compress the image
    console.log("pathhhhhh","./" + imagePath)

    // if (!fs.existsSync(imagePath)) {
    //   throw new Error(`Image file does not exist at: ${imagePath}`);
    // }

    // // Check metadata for debugging
    // const metadata = await sharp(`./${imagePath}`).metadata();
    // console.log("Image metadata:", metadata);

    await sharp("./" + imagePath) 
      .resize(256) // Resize to 256px width
      .jpeg({ quality: 50 }) // Compress to reduce size
      .toFile(outputPath);

    // Read the resized image and convert to Base64
    const imageBuffer = fs.readFileSync("./"+imagePath);
    return imageBuffer.toString("base64");
  } catch (error) {
    console.error("Error encoding image:", error);
    throw error;
  }
}

// Main function
async function analyzeImage() {
  try {
    console.log("Capturing image...");
    const capturedImagePath = await captureImage(); // Path to captured image
    console.log("Captured image saved to:", capturedImagePath);

    const resizedImagePath = "./resized_webcam_image.jpg"; // Output path for resized image

    console.log("Encoding image...");
    const base64Image = await encodeImage(capturedImagePath, resizedImagePath);

    console.log("Sending image to OpenAI...");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use the appropriate OpenAI model
      messages: [
        {
          role: "user",
          content: `{"type": "text", "text": "What is in this image?"}`,
        },
        {
          role: "user",
          content: `{"type": "image_url", "image_url": {"url": "data:image/jpg;base64,${base64Image}"}}`,
        },
      ],
    });

    console.log("Response:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error analyzing the image:", error);
  }
}

analyzeImage();
