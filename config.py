from dataclasses import dataclass

@dataclass
class Config:
    token: str = 'BOT_TOKEN'
    admin_ids: int = 1
    pay_token: str = 'PAYMENT_TOKEN'
