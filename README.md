# learn-pwa

1. [Manifest](docs/1.Manifest.md)
2. [ServiceWorker](docs/2.ServiceWorker.md)
3. [Workbox](docs/3.Workbox.md)
4. [Compile](docs/4.Compile.md)
5. [Prompt Install](docs/5.prompt-install.md)
6. [Sentry](docs/6.Sentry.md)
7. [Channel](docs/Channel.md)

`TODO:`

- [x] 生产降级方案，见 `reset` 模块。但其实最终方案和重置方案都是 `skipWaiting` 。
- [x] 异常监控
- [x] `APP shell` 骨架屏。该功能指的是 `PWA` 的外部壳子，其存在的意义在于向现有 `Native APP` 的体验靠拢。但目前现实业务意义不大。因为 `PWA` 的实际应用推广并没有流行起来。
- [x] 引导添加到桌面 -- 可用性太差，生产环境不推荐使用
