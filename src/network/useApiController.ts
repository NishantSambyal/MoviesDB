import { RESPONSE_CODE } from '../utils/responseCode';

interface HandleAPICallType {
  payload?: any;
  handleSuccess: any;
  handleFailure: any;
  route: any;
}

const handleAPICall = async ({
  payload,
  handleSuccess,
  handleFailure,
  route,
}: HandleAPICallType) => {
  try {
    const response = await route(payload);
    if (response.status === RESPONSE_CODE.success) {
      const data = response.json();
      handleSuccess(data);
    } else {
      handleFailure(response);
    }
  } catch (error) {
    handleFailure(error);
  }
};
export { handleAPICall };
