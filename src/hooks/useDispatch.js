import { useDispatch as ToolkitDispatch } from "react-redux";

export default function useDispatch() {
  const dispatch = ToolkitDispatch();

  const handleRequest = async (apiCall, successMessage) => {
    try {
      const data = await dispatch(apiCall);

      if (!!data.error) {
        throw data.error?.message;
      }

      if (successMessage) {
        alert(successMessage, "success");
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return handleRequest;
}
