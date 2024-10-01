import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

def load_data(volunteer_file, ngo_file):
    # Load volunteer and NGO project data
    volunteers = pd.read_csv(volunteer_file)
    ngos = pd.read_csv(ngo_file)

    return volunteers, ngos

def preprocess_data(volunteers, ngos):
    # Perform necessary preprocessing steps, like label encoding for categorical variables
    label_encoder = LabelEncoder()
    
    # Example encoding categorical columns like 'Availability', 'Interests', 'Location'
    volunteers['Availability'] = label_encoder.fit_transform(volunteers['Availability'])
    volunteers['Location'] = label_encoder.fit_transform(volunteers['Location'])
    ngos['Location'] = label_encoder.fit_transform(ngos['Location'])
    
    return volunteers, ngos

if __name__ == "__main__":
    volunteers, ngos = load_data('volunteers.csv', 'ngos.csv')
    volunteers, ngos = preprocess_data(volunteers, ngos)
