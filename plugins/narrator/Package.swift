// swift-tools-version: 5.9
import PackageDescription

// The name must be what Capacitor derives from "sixteen-narrator".
let package = Package(
    name: "SixteenNarrator",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "SixteenNarrator",
            targets: ["NarratorPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "NarratorPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NarratorPlugin")
    ]
)
