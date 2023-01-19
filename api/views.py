from django.http import JsonResponse
from rest_framework.decorators import api_view
from pathlib import Path
import numpy as np
import pickle
from Clinical_Decision_Support_System import settings


@api_view(['POST'])
def CDSS(request, format=None):
    print(request.data.values())
    model = pickle.load(open(str(settings.BASE_DIR) +'/api/ML_Models/CDSS.pkl', 'rb'))
    sample = np.array(list(request.data.values())).reshape(1, -1)
    print(model.predict(sample))
    return JsonResponse({"prognosis": str(model.predict(sample)[0])})
