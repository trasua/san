import checkExsited from './checkExisted'
import createAccount from './createAccount'
import getRefer from './getRefer'
import validateInput from './validateInput'

const registerAction = async args => {
    const input = validateInput(args)

    await checkExsited({ email: input.email })

    const [account, refer] = await Promise.all([
        createAccount(input),
        getRefer(input),
    ])

    if (refer?._id) account.refer = refer._id
    await account.save()

    return {
        account: {
            email: account.email,
            refer: account.refer,
        },
    }
}

export default registerAction
