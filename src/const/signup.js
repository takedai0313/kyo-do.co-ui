/**
* サインアップ失敗理由
*/
export const SIGNUP_FAILURE_REASONS = {
  ID_DUPLICATED : "ID_DUPLICATED", //ID重複
  SERVER_ERROR : "SERVER_ERROR", //サーバーエラー
  INVALID_CONFIRM : "INVALID_CONFIRM", //パスワード確認用不一致
  EMPTY_ID : "EMPTY_ID", //IDが空,
  EMPTY_PASSWORD:"EMPTY_PASSWORD", //パスワードが空
  EMPTY_NAME : "EMPTY_NAME", //表示名が空
  POLICY_PASSWORD : "POLICY_PASSWORD" //パスワードポリシーの要件を満たしていない
}
