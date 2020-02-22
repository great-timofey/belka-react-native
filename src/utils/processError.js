export const FALLBACK_ERROR_MESSAGE = 'Произошла неизвестная ошибка. Попробуйте позднее'
export const FALLBACK_ERROR_CODE = 0

export function processError(error) {
  if (
    (error && error.response && error.response.status) ||
    (error.response.data && error.response.data.status)
  ) {
    const {
      response: { status },
    } = error
    return [status, FALLBACK_ERROR_MESSAGE]
  }

  return [FALLBACK_ERROR_CODE, FALLBACK_ERROR_MESSAGE]
}
