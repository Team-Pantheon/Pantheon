import streamlit as st
import pandas as pd
import numpy as np
import joblib
from sklearn.preprocessing import LabelEncoder

# Load pre-trained model
model = joblib.load('volunteer_matching_model.pkl')

# Load the encoders with their fitted values from training
availability_classes = np.load('availability_classes.npy', allow_pickle=True)
location_classes = np.load('location_classes.npy', allow_pickle=True)

# Define a mapping of NGO projects for demonstration
ngo_projects = {
    0: "Project A: Environmental Awareness",
    1: "Project B: Education for Underprivileged",
    2: "Project C: Community Health Outreach",
    3: "Project D: Women Empowerment Program",
    4: "Project E: Animal Welfare Initiative"
}

st.title("Volunteer-NGO Matching System")

# Input fields
email = st.text_input("Email ID")
username = st.text_input("Username")
password = st.text_input("Password", type="password")
age = st.number_input("Age", min_value=18, max_value=60, step=1)

availability = st.selectbox("Availability", availability_classes.tolist())
interests = st.multiselect("Interests", [
    "Fundraising and Donor Relations",
    "Event Planning and Management",
    "Social Media and Content Creation",
    "Mentoring and Tutoring"
])
location = st.selectbox("Location", location_classes.tolist())

# When user submits
if st.button("Find Matching NGOs"):
    # Preprocess input for prediction
    try:
        # Transform the input for encoding
        availability_encoded = np.where(availability_classes == availability)[0][0]
        location_encoded = np.where(location_classes == location)[0][0]
    except IndexError as e:
        st.error(f"Error in encoding input: {e}. Please ensure all input options are valid.")
        st.stop()

    # Prepare data for the model
    input_data = pd.DataFrame({
        'Age': [age],
        'Availability': [availability_encoded],
        'Location': [location_encoded]
    })

    # Predict suitable NGOs
    result = model.predict(input_data)

    if result[0] == 1:  # Assuming '1' indicates a match
        # For demonstration, we will select a project randomly from the NGO projects
        matched_project_index = np.random.randint(0, len(ngo_projects))
        matched_project = ngo_projects[matched_project_index]
        st.success(f"You have matching NGOs! Matched Project: {matched_project}")
    else:
        st.error("No suitable match found.")

# Debugging information
st.write("Debug Information:")
st.write(f"Availability Classes: {availability_classes}")
st.write(f"Location Classes: {location_classes}")
st.write(f"Selected Availability: {availability}")
st.write(f"Selected Location: {location}")