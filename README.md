# iq-label

> 신박한 조합, 신나는 출퇴근

iq-label은 AI로 생성하고 손으로 큐레이션한 fusion 음악 레이블입니다.
모든 트랙은 두 장르의 조합으로 만들어집니다.

## Local development

```bash
npm install
npm run dev
```

http://localhost:4321/iq-label/ 에서 확인 (base path).

## Build

```bash
npm run build
npm run preview
```

## Adding a new track

1. `public/audio/` 에 mp3 파일 추가 (예: `boom-bap-002.mp3`)
2. `src/data/tracks.json` 에 트랙 메타데이터 추가
3. `src/data/genres.json` 의 `track_count` 업데이트

## License

- Site code: MIT
- Music tracks: CC-BY-NC 4.0 (per-track metadata)

## Universe

- Blog: [iq-proof.github.io](https://iq-proof.github.io)
- Dev Lab: [iq-dev-lab.github.io](https://iq-dev-lab.github.io)
- AI Lab: [iq-ai-lab.github.io](https://iq-ai-lab.github.io)
- Agent Lab: [iq-agent-lab.github.io](https://iq-agent-lab.github.io)
