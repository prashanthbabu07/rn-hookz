//
//  AppDelegate.swift
//  Hookz
//
//  Created by Prashanth Babu T on 29/08/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate
{
    var window: UIWindow?
    var bridge: RCTBridge!
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool
    {
        let jsCodeLocation: URL
      
        jsCodeLocation =    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "Hookz", initialProperties: nil, launchOptions: launchOptions)
        let rootViewController = UIViewController()
        rootViewController.view = rootView
      
        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = rootViewController
        self.window?.makeKeyAndVisible()
        return true
    }
}

