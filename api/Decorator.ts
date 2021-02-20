export function logger(target: unknown, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const result=await original.apply(this, args)
        console.log("Logged value: "+result)
        return result
    };

    return descriptor;
}