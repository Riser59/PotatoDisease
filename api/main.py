from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from PIL import Image
from io import BytesIO
import numpy as np
import tensorflow as tf

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to specify allowed origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model("potatoModel.keras")
class_names = ["Early Blight", "Late Blight", "Healthy"]

@app.get("/ping")
async def pong():
    return {"ping": "pong!"}

def read_file_as_image(data) -> np.ndarray:
    image = Image.open(BytesIO(data))
    image = np.array(image)
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    bytes = read_file_as_image(await file.read())
    img_batch = np.expand_dims(bytes, 0)
    prediction = model.predict(img_batch)
    predicted_class = class_names[np.argmax(prediction)]
    confidence = np.max(prediction)
    return {"class": predicted_class, "confidence": float(confidence)}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
