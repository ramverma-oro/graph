import { BigInt } from "@graphprotocol/graph-ts"
import {
  UnifarmV18,
  BlockedDetails,
  Claim,
  DailyDistributionDetails,
  IntervalDaysDetails,
  LockableTokenDetails,
  OptionableBenefitDetails,
  OwnershipTransferred,
  Paused,
  ReferralEarn,
  ReferrerPercentageDetails,
  SequenceDetails,
  Stake,
  StakeDurationDetails,
  TokenDetails,
  UnStake,
  Unpaused,
  WithdrawDetails
} from "../generated/UnifarmV18/UnifarmV18"
import { StakeEntity, ClaimEntity, UnStakeEntity, ReferralEarnEntity } from "../generated/schema"

export function handleStake(event: Stake): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = StakeEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new StakeEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.userAddress = event.params.userAddress
  entity.stakeId = event.params.stakeId
  entity.referrerAddress = event.params.referrerAddress
  entity.tokenAddress = event.params.tokenAddress
  entity.stakedAmount = event.params.stakedAmount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DAYS(...)
  // - contract.HOURS(...)
  // - contract._admin(...)
  // - contract._owner(...)
  // - contract.addToken(...)
  // - contract.getOneDayReward(...)
  // - contract.intervalDays(...)
  // - contract.isTrustedForwarder(...)
  // - contract.optionableBenefit(...)
  // - contract.pause(...)
  // - contract.paused(...)
  // - contract.poolStartTime(...)
  // - contract.refPercentage(...)
  // - contract.rewardCap(...)
  // - contract.setRewardCap(...)
  // - contract.stakeDuration(...)
  // - contract.stakingDetails(...)
  // - contract.tokenBlockedStatus(...)
  // - contract.tokenDailyDistribution(...)
  // - contract.tokenDetails(...)
  // - contract.tokens(...)
  // - contract.tokensSequenceList(...)
  // - contract.totalStaking(...)
  // - contract.trustedForwarder(...)
  // - contract.unStake(...)
  // - contract.unpause(...)
  // - contract.userTotalStaking(...)
  // - contract.versionRecipient(...)
  // - contract.viewStakingDetails(...)
  // - contract.viewTokensCount(...)
}

export function handleClaim(event: Claim): void {
  let entity = ClaimEntity.load(event.transaction.from.toHex())

  if (entity == null) {
    entity = new ClaimEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.userAddress = event.params.userAddress
  entity.stakedTokenAddress = event.params.stakedTokenAddress
  entity.tokenAddress = event.params.tokenAddress
  entity.claimRewards = event.params.claimRewards
}

// export function handleDailyDistributionDetails(
//   event: DailyDistributionDetails
// ): void {}

// export function handleIntervalDaysDetails(event: IntervalDaysDetails): void {}

// export function handleLockableTokenDetails(event: LockableTokenDetails): void {}

// export function handleOptionableBenefitDetails(
//   event: OptionableBenefitDetails
// ): void {}

// export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

// export function handlePaused(event: Paused): void {}

// export function handleReferralEarn(event: ReferralEarn): void {
//   let entity = ReferralEarn.load(event.transaction.from.toHex())

//   if (entity == null) {
//     entity = new ReferralEarn(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }
// }

// export function handleReferrerPercentageDetails(
//   event: ReferrerPercentageDetails
// ): void {}

// export function handleSequenceDetails(event: SequenceDetails): void {}

// export function handleStake(event: Stake): void {}

// export function handleStakeDurationDetails(event: StakeDurationDetails): void {}

// export function handleTokenDetails(event: TokenDetails): void {}

export function handleUnStake(event: UnStake): void {
  let entity = UnStakeEntity.load(event.transaction.from.toHex())

  if (entity == null) {
    entity = new UnStakeEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.userAddress = event.params.userAddress
  entity.unStakedtokenAddress = event.params.unStakedtokenAddress
  entity.unStakedAmount = event.params.unStakedAmount
  entity.time = event.params.time
  entity.stakeId = event.params.stakeId
}

// export function handleUnpaused(event: Unpaused): void {}

// export function handleWithdrawDetails(event: WithdrawDetails): void {}
