
#So first I import the RSA module
import rsa

keyLen = int(input('Enter the key length (greater than 512 but not too large): '))
if keyLen < 512:
	print('Keylength too small')
else:
	publicKey, privateKey = rsa.newkeys(keyLen)
def dec(x):
	decx = input('\nEnter DEC to decrypt: ')
	if decx == 'DEC' or 'dec':
		print("Decrypted message: ", decMessage)
	else:
		decx = input('')


message = input("Enter a message to be decrypted: ")


# Encoding with the encode method then encrypting
encMessage = rsa.encrypt(message.encode(), publicKey)

# """Finally, the original message and the decrypted message will be printed out"""
print("\nThe original message: ", message)
print("Encrypted message: ", encMessage)
print("*Encrypted message can now be sent over an unsecure network.")

# """The encrypted message can be is decrypted with the ras.decrypt method and the private key"""
decMessage = rsa.decrypt(encMessage, privateKey).decode()
dec(message)