#!/bin/bash

# .env 파일 로드
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env 파일이 존재하지 않습니다."
  exit 1
fi

# SUPABASE_PROJECT_ID 설정되었는지 확인
if [ -z "$SUPABASE_PROJECT_ID" ]; then
  echo "SUPABASE_PROJECT_ID .env 파일에 설정되지 않았습니다."
  exit 1
fi

# 타입 생성 명령어 실행
echo "타입 생성 중..."
supabase gen types typescript --project-id "$PROJECT_ID" > database.types.ts

if [ $? -eq 0 ]; then
  echo "타입 생성이 완료되었습니다: database.types.ts"
else
  echo "타입 생성 중 오류가 발생했습니다."
  exit 1
fi