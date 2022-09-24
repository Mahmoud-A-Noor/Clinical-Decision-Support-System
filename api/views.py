from django.http import JsonResponse
from rest_framework.decorators import api_view
from pathlib import Path
import numpy as np
import pickle


@api_view(['POST'])
def CDSS(request, format=None):
    BASE_DIR = Path(__file__).resolve().parent.parent
    model = pickle.load(open(str(BASE_DIR) +'/api/ML_Models/CDSS.pkl', 'rb'))
    sample = np.array(list(request.data.values())).reshape(1, -1)
    print(model.predict(sample))
    return JsonResponse({"prognosis": str(model.predict(sample)[0])})
