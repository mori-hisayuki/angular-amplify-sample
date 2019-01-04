// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  amplify: {
    // AWS Amplify(Auth)の設定
    Auth: {
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_bFJ96t5QS',
      userPoolWebClientId: '44pdh263dmqd3ivlkg0mn854ba'
    }
  },
  // API Gatewayのエンドポイントの設定
  apiBaseUrl: 'https://2m99xdtol0.execute-api.ap-northeast-1.amazonaws.com/develop',
  // Localstorageの設定
  localstorageBaseKey: 'CognitoIdentityServiceProvider.44pdh263dmqd3ivlkg0mn854ba.'
};
