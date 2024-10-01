from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import joblib
import numpy as np
import data_preprocessing

def train_model(volunteers, ngos):
    # Initialize Label Encoders
    label_encoder_availability = LabelEncoder()
    label_encoder_location = LabelEncoder()

    # Encoding categorical columns
    volunteers['Availability'] = label_encoder_availability.fit_transform(volunteers['Availability'])
    volunteers['Location'] = label_encoder_location.fit_transform(volunteers['Location'])

    # Features and Target
    X = volunteers[['Age', 'Availability', 'Location']]  # Features
    y = ngos['Matched']  # Target: 1 if a match, 0 otherwise
    
    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Initialize and train the Random Forest Classifier
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluate the model
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    print(f"Model Accuracy: {accuracy:.2f}")
    
    # Save the model
    joblib.dump(model, 'volunteer_matching_model.pkl')
    
    # Save the label encoders for later use in the prediction phase
    np.save('availability_classes.npy', label_encoder_availability.classes_)
    np.save('location_classes.npy', label_encoder_location.classes_)
    
    return model

if __name__ == "__main__":
    # Preprocess and load data
    volunteers, ngos = data_preprocessing.preprocess_data(*data_preprocessing.load_data('volunteers.csv', 'ngos.csv'))
    model = train_model(volunteers, ngos)
