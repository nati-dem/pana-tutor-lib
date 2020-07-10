export enum ErrorCode {
  LOGIN_ERROR = "LOGIN_ERROR",
  WRONG_PASSWORD = "WRONG_PASSWORD",
  INVALID_PARAM = "INVALID_PARAM",
  INVALID_FILE = "INVALID_FILE",
  UNSUPPORTED_IMAGE="UNSUPPORTED_IMAGE",
  QUIZ_ANS_ENTRY_ERROR = "QUIZ_ANS_ENTRY_ERROR",
  SUMBIT_TUTOR_REQUEST="SUMBIT_TUTOR_REQUEST",
  QUIZ_SUBMIT_ERROR = "QUIZ_SUBMIT_ERROR",
  FORBIDDEN_ACCESS = "FORBIDDEN_ACCESS",
  INVALID_PARAM_SEARCH = "INVALID_PARAM_SEARCH",
  REGISTER_ERROR = "SIGNUP_ERROR",
  PROFILE_ERROR = "PROFILE_GET_ERROR",
  GET_AUTH_INFO_ERROR = "GET_AUTH_INFO_ERROR",
  CATEGORY_GET_ERROR = "CATEGORY_GET_ERROR",
  COURSE_BY_CATEGORY_GET_ERROR = "COURSE_BY_CATEGORY_GET_ERROR",
  COURSE_GET_ERROR = "COURSE_GET_ERROR",
  CHAPTER_GET_ERROR = "CHAPTER_GET_ERROR",
  LESSON_GET_ERROR = "LESSON_GET_ERROR",
  QUIZ_GET_ERROR = "QUIZ_GET_ERROR",
  QUIZ_QUE_FIND_ERROR = "QUIZ_QUE_FIND_ERROR",
  QUE_GET_ERROR = "QUE_GET_ERROR",
  MEDIA_GET_ERROR = "MEDIA_GET_ERROR",
  SEARCH_ERROR = "SEARCH_ERROR",
  PROFILE_UPDATE_ERROR = "PROFILE_UPDATE_ERROR",
  PASSWORD_CHANGE_ERROR = "PASSWORD_CHANGE_ERROR",
  INVALID_AUTH = "INVALID_AUTH",
  APP_TOKEN_ERROR = "SERVICE_TOKEN_ERROR",
  INVALID_TOKEN = "INVALID_TOKEN",
  ALREADY_EXIST = "ALREADY_EXIST",
}

export enum ErrorMessage {
  INVALID_PARAM = "Invalid parameter(s)",
  INVALID_FILE = "Invalid File",
  PROFILE_ERROR = "Error Fetching User Profile",
  GET_AUTH_INFO_ERROR = "Error Fetching User Auth Info",
  UNAUTHORIZED = "UNAUTHORIZED",
  DB_ERROR = "DB Operation Error",
  DB_UPDATE_ERROR = "DB Update Operation Error",
  DB_INSERT_ERROR = "DB Insert Operation Error",
  DB_FIND_ERROR = "DB Find Operation Error",
  DB_DELETE_ERROR = "DB Delete Operation Error",
  FORBIDDEN = "FORBIDDEN",
  DUPLICATE_ENTRY = "Entry Already Exists in DB",
  WRONG_PASSWORD = "Current password entered is incorrect",
  UNSUPPORTED_IMAGE ="File format should be PNG,JPG,JPEG",
  INVALID_AUTH_TOKEN = "Invalid Auth Token"
}

export enum EntityType {
  courses = "courses",
  course_chapters = "course_chapters",
  course_lessons = "course_lessons",
  quiz = "quiz",
  users = "users",
  question_box = "question_box"
}
