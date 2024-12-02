# Energy Efficiency Predictor

A web-based AI application that predicts the **heating load** (energy efficiency) of a building based on its structural characteristics. This project uses **TensorFlow.js** for creating and training a predictive model, and the **UCI Energy Efficiency Dataset** as its data source.

---

## **Features**
- Predicts energy efficiency (heating load) based on the following features:
  1. **Relative Compactness**: Building compactness (0.5 - 1.0).
  2. **Surface Area**: External surface area in square meters.
  3. **Wall Area**: Wall area in square meters.
  4. **Roof Area**: Roof area in square meters.
  5. **Overall Height**: Height of the building in meters.

- Built with **TensorFlow.js**, runs entirely in the browser, and requires no backend setup.

---

## **Project Structure**

| File Name               | Purpose                                                                                  |
|-------------------------|------------------------------------------------------------------------------------------|
| `ENB2012_data.xlsx`     | The original dataset file containing building energy efficiency data.                    |
| `convert_to_json.py`    | Python script to convert the Excel dataset into JSON format for use in the application.  |
| `data/`                 | Directory containing the converted JSON dataset (`energy-efficiency-data.json`).         |
| `index.html`            | The main HTML file to load and display the web-based application.                        |
| `style.css`             | CSS file to style the application interface.                                             |
| `script.js`             | JavaScript file containing the TensorFlow.js model and logic for prediction.             |
| `README.md`             | Documentation explaining the project setup, usage, and test cases.                       |

---

## **Dataset**
- The **UCI Energy Efficiency Dataset** is used for training the model.
- [Download the dataset](https://archive.ics.uci.edu/ml/datasets/Energy+efficiency) for reference.

---

## **How to Set Up and Test**

### **Step 1: Prerequisites**
Ensure you have Python installed to run a local server. Then, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/nasirtrekker/testcodeAIEng_energyefficiency.git
   cd testcodeAIEng_energyefficiency


2. Install Python libraries to run the conversion script:
    python3 convert_to_json.py 

3. Start the local server
  python3 -m http.server 

4. Once the server is running go the webpage 
  - Input the values for the building characteristics
  - Click the “Predict” button.
  - View the predicted heating load (in kWh) displayed on the page.


  *Contributing*

Feel free to contribute by opening issues or pull requests in this repository.

*License*

This project is licensed under the MIT License.
