# Coinflow Documentation Notes
* *unimportant:* 2px margin between the instructions component and the code component on the documentation page.
* **"Fixing WebPack 5 issues"**
    * There are places in the documentation which refer to multiple places in the code. For exmaple, this section refers to both **package.json** and **config-overrides.js**. This section should be split to two separate subsections, where clicking on either takes you to the correct file
    * It is a little ambiguous when you say "please add the following in the devDependencies"... if you need to install every single dev dependency thats in the package.json or a subset. Change to something like: "Add all of the devDependencies you see in our package.json to your own"
    * Even better, explicitly include the npm install command like you do for the normal dependencies

            npm install --save-dev ....

        * If you do keep it as is, you should specify that the user needs to run `npm install --dev` to actually install the dev dependencies into the project
    * This section should also expand on why you need the **react-app-rewired** library, and the necessary changes to `npm run start` script
    * This section also seems to be out of date with regard to all the Webpack 5 fixes that are required.
        * I had to install **browserify-zlib** as a dev dependency and include the following code in **config-overrides.js** to fix some build issues:

                zlib: require.resolve('browserify-zlib'),
    
        * Similarly, the documentation did not tell me to install the **url** package as a dev dependency (or perhaps a normal dependency?), but I had to do this as well to fix some Webpack5 issues
    * I am not actually sure about this one, but is **react-app-rewired** necessary? Could the same be accomplished without using an external library - just by updating the webpack config? Even if it is, I'm sure there are benefits to that library. I'm just not familiar enough with it to know.
* Since React 17, you no longer have to import React at the top of your tsx files; however, I do understand why you would keep this in the example code, so that those files still work in older React projects. I just always err on the side of brevity.
* It might be better to have a custom Wallet.tsx component in the **@coinflowlabs/react** module that the user can import, as opposed to having users copy and paste the component's code... This would probably help clean up the dependencies and devDepencies you have users install in their client app as well
* **"Configure the Coinflow Withdraw Component"**
    * This section feels somewhat incomplete, as there is a lot that happens in this section, but it is not entirely detailed in the instructions. It would probably be better split into multiple subsections that explicitly link to the relevant portions of the code.
        * A subsection with more details on the following imports
            
                import { useConnection, useWallet } from '@solana/wallet-adapter-react';
                import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

        * A subsection on the component tree in the App component and what each piece does
            * Also, you include the `<Wallet>` tag two times in the App component. Remove one of these
    * All and all, I still found it pretty intuitive what to do, but I also have a lot of javascript and React experience. It would be better to have instructions so complete that someone with zero react or development experience can blindly follow along and get this app started up
* *unimportant:* I prefer more concise tags if possible... i.e. the following opening tag only needs one line

        <div style={{ height: '100vh' }}>
            <CoinflowContent />
        </div>
* It's pretty obvious that this is the eventual plan, but probably not a priority right now: documentation for the other major javascript libraries: Angular, Vue, Svelte, maybe raw javascript as well? Not sure if the last one is possible or not given the reliance on solana.
    * Also maybe documentation for different bundling tools.. my favorite being vite