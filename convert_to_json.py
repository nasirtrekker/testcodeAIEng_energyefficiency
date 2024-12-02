import pandas as pd
import json

# Load the dataset
excel_file = "ENB2012_data.xlsx"
df = pd.read_excel(excel_file)

# Select relevant columns
# For example: Compactness, SurfaceArea, WallArea, RoofArea, Height, HeatingLoad
columns = [
    "X1",  # Compactness
    "X2",  # Surface Area
    "X3",  # Wall Area
    "X4",  # Roof Area
    "X5",  # Overall Height
    "Y1",  # Heating Load
]
df = df[columns]
df.columns = ["Compactness", "SurfaceArea", "WallArea", "RoofArea", "Height", "HeatingLoad"]

# Save to JSON
output_file = "energy-efficiency-data.json"
df.to_json(output_file, orient="records", indent=4)

print(f"Data converted and saved to {output_file}")