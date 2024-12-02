let model;

// Load and preprocess the dataset
async function loadData() {
    const response = await fetch("./data/energy-efficiency-data.json");
    const rawData = await response.json();

    // Separate features and labels
    const inputs = rawData.map(item => [
        item.Compactness,
        item.SurfaceArea,
        item.WallArea,
        item.RoofArea,
        item.Height
    ]);
    const labels = rawData.map(item => [item.HeatingLoad]);

    return {
        inputs: tf.tensor2d(inputs),
        labels: tf.tensor2d(labels)
    };
}

// Create and train the model
async function trainModel(data) {
    console.log("Creating and training model...");

    // Define a sequential model
    model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [5], units: 10, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1 })); // Single output: Heating Load

    // Compile the model
    model.compile({
        optimizer: tf.train.adam(),
        loss: 'meanSquaredError',
        metrics: ['mse']
    });

    // Train the model
    await model.fit(data.inputs, data.labels, {
        epochs: 100,
        callbacks: tf.callbacks.earlyStopping({ monitor: 'loss', patience: 5 })
    });

    console.log("Model trained successfully!");
}

// Predict Heating Load
async function predictHeatingLoad(features) {
    if (!model) {
        document.getElementById("result").innerText = "Model not ready yet.";
        return;
    }

    // Create input tensor
    const inputTensor = tf.tensor2d([features]);
    const prediction = model.predict(inputTensor);
    const result = await prediction.data();

    document.getElementById("result").innerText = `Predicted Heating Load: ${result[0].toFixed(2)} kWh`;
}

// Form submission handler
document.getElementById("predictionForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const compactness = parseFloat(document.getElementById("compactness").value);
    const surfaceArea = parseFloat(document.getElementById("surfaceArea").value);
    const wallArea = parseFloat(document.getElementById("wallArea").value);
    const roofArea = parseFloat(document.getElementById("roofArea").value);
    const height = parseFloat(document.getElementById("height").value);

    await predictHeatingLoad([compactness, surfaceArea, wallArea, roofArea, height]);
});

// Load and train the model
loadData().then(data => trainModel(data));