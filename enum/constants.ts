export enum ErrorCode {
  LOGIN_ERROR = "LOGIN_ERROR",
  INVALID_PARAM = "INVALID_PARAM",
  QUIZ_ANS_ENTRY_ERROR = "QUIZ_ANS_ENTRY_ERROR",
  QUIZ_SUBMIT_ERROR = "QUIZ_SUBMIT_ERROR",
  FORBIDDEN_ACCESS = "FORBIDDEN_ACCESS",
  INVALID_PARAM_SEARCH = "INVALID_PARAM_SEARCH",
  REGISTER_ERROR = "SIGNUP_ERROR",
  PROFILE_ERROR = "PROFILE_GET_ERROR",
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
  INVALID_AUTH = "INVALID_AUTH",
  APP_TOKEN_ERROR = "SERVICE_TOKEN_ERROR",
  INVALID_TOKEN = "INVALID_TOKEN",
  ALREADY_EXIST = "ALREADY_EXIST",
}

export enum ErrorMessage {
  INVALID_PARAM = "Invalid parameter(s)",
  UNAUTHORIZED = "UNAUTHORIZED",
  DB_ERROR = "DB Operation Error",
  FORBIDDEN = "FORBIDDEN",
  DUPLICATE_ENTRY = "Entry Already Exists in DB"
}

export enum EntityType {
  courses = "courses",
  course_chapters = "course_chapters",
  course_lessons = "course_lessons",
  quiz = "quiz",
  users = "users",
  question_box = "question_box"
}
