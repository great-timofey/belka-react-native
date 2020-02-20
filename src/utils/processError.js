export const FALLBACK_ERROR_MESSAGE = 'Попробуйте позднее'
export const FALLBACK_ERROR_CODE = 0

export function processError(error) {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.status &&
    error.response.data.message
  ) {
    const {
      response: {
        data: { status, message },
      },
    } = error
    return [status, message]
  }

  return [FALLBACK_ERROR_CODE, FALLBACK_ERROR_MESSAGE]
}
